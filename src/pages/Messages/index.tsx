import { ChangeEvent, useEffect, useRef, useState } from "react";
import styles from "./messages.module.scss";

interface Message {
  id: string;
  name: string;
  phone: string;
  attendances: number;
  createdAt: string;
}

export default function Messages() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedMessages, setSelectedMessages] = useState<Map<string, string>>(
    new Map()
  );
  const selectedAllRef = useRef<HTMLInputElement>(null);

  const handleSelectAll = (e: ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    const newSelectedMessages = new Map<string, string>();

    if (checked) {
      messages.forEach((message) => {
        newSelectedMessages.set(message.id, message.id);
      });
    }

    setSelectedMessages(newSelectedMessages);
  };

  const handleSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const id = e.target.id;
    const checked = e.target.checked;

    if (checked) {
      setSelectedMessages(
        (prevSelectedMessages) => new Map(prevSelectedMessages.set(id, id))
      );
    } else {
      setSelectedMessages((prevSelectedMessages) => {
        prevSelectedMessages.delete(id);
        return new Map(prevSelectedMessages);
      });
    }
  };

  const handleDeleteMany = async () => {
    for (const id of selectedMessages.keys()) {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/messages/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await res.json();

      if (!res.ok) {
        console.log(data);
        return;
      }
    }

    setMessages((prevMessages) =>
      prevMessages.filter((message) => !selectedMessages.has(message.id))
    );

    setSelectedMessages(new Map());

    selectedAllRef.current!.checked = false;

    alert("Selected messages deleted successfully");
  };

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/messages/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await res.json();

      if (!res.ok) {
        console.log(data);
        return;
      }

      setMessages((prevMessages) =>
        prevMessages.filter((message) => message.id !== id)
      );

      setSelectedMessages((prevSelectedMessages) => {
        prevSelectedMessages.delete(id);
        return new Map(prevSelectedMessages);
      });

      alert("Message deleted successfully");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/messages?_sort=-createdAt`)
      .then((res) => res.json())
      .then((data) => {
        setMessages(data);
      })
      .catch((error) => {
        console.error("Error fetching messages", error);
      });
  }, []);

  return (
    <div className={styles.admin}>
      <h1 className={styles.admin_title}>Messages</h1>

      {selectedMessages.size > 0 && (
        <div className={styles.admin_delete}>
          <button type="button" onClick={handleDeleteMany}>
            Delete
          </button>
          <p>Selected {selectedMessages.size} records</p>
        </div>
      )}

      <table className={styles.admin_table}>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                id="selectAll"
                name="selectAll"
                onChange={handleSelectAll}
                ref={selectedAllRef}
              />
            </th>
            <th>Id</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Attendances</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {messages.map((message) => (
            <tr key={message.id}>
              <td>
                <input
                  type="checkbox"
                  id={message.id}
                  name={message.id}
                  checked={Boolean(selectedMessages.get(message.id))}
                  onChange={handleSelect}
                />
              </td>
              <td>{message.id}</td>
              <td>{message.name}</td>
              <td>{message.phone}</td>
              <td>{message.attendances}</td>
              <td>
                <button type="button" onClick={() => handleDelete(message.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
