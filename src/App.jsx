import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import UserForm from "./components/UserForm";
import { UserProvider } from "./components/UserContext";
import "./style.css";

export default function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [userName, setUserName] = useState("");
  const [element, setElement] = useState("");
  const [artwork, setArtwork] = useState(null);

  const questions = [
    {
      question: "What's your favorite color?",
      options: ["Red 🔴", "Blue 🔵", "Green 🟢", "Yellow 🟡"],
    },
  ];

  const keywords = {
    Fire: "fire",
    Water: "water",
    Earth: "earth",
    Air: "air",
  };

  const elements = {
    "Red 🔴": "Fire",
    "Blue 🔵": "Water",
    "Green 🟢": "Earth",
    "Yellow 🟡": "Air",
    // Continue mapping all your possible options to a keyword
  };

  return (
    <>
      <UserProvider>
        <Header />
        <Routes>
          <Route path="/" exact element={<UserForm />} />
        </Routes>
      </UserProvider>
    </>
  );
}
