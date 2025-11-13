import { useEffect, useState } from "react";
import Confetti from "react-confetti";

export default function BirthdayPopup({ user }) {
  const [show, setShow] = useState(false);
  const [confetti, setConfetti] = useState(false);

  useEffect(() => {
    if (!user?.birthday) return;

    const today = new Date();
    const currentYear = today.getFullYear();
    const shownYear = localStorage.getItem(`birthdayShown_${user.id}`);

    if (shownYear == currentYear) return;

    const [year, month, day] = user.birthday.split("-").map(Number);
    const birthDate = new Date(year, month - 1, day);

    const isBirthday =
      today.getDate() === birthDate.getDate() &&
      today.getMonth() === birthDate.getMonth();

    if (isBirthday) {
      setShow(true);
      setConfetti(true);

      localStorage.setItem(`birthdayShown_${user.id}`, currentYear);
      const timeout = setTimeout(() => setConfetti(false), 5000);
      return () => clearTimeout(timeout);
    }
  }, [user]);

  if (!show) return null;

  return (
    <>
      {confetti && (
        <Confetti
          recycle={false}
          numberOfPieces={1000}
          style={{ position: "fixed", top: 0, left: 0, zIndex: 9999 }}
        />
      )}
      <div className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-50 z-50">
        <div className="bg-white p-6 rounded-2xl shadow-lg text-center max-w-sm animate-fade-in">
          <h2 className="text-2xl font-bold mb-2">
            Happy Birthday, {user.first_name}! 🎉🎂
          </h2>
          <p className="text-gray-600 mb-4">
            Wishing you a day full of happiness and joy!
          </p>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            onClick={() => setShow(false)}
          >
            Thanks!
          </button>
        </div>
      </div>
    </>
  );
}
