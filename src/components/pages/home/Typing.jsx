import React from 'react'
import TypeWriterEffect from "react-typewriter-effect";

const Typing = () => {
  return (
    <TypeWriterEffect
    textStyle={{
      color: "rgb(85, 73, 255)",
      fontWeight: "700",
      fontSize: "3.3rem",
    }}
    cursorColor="#f6f6f6"
    startDelay={200}
    multiText={[
      "Sherbolot Arbaev 👋🏻",
      "Full-Stack developer 🧑🏻‍💻",
      "Software Engineer 😎",
      "Graphic designer 🧑🏻‍🎨",
      "UI-UX designer 🧑🏻‍🎨",
      "Student 👨🏻‍🎓",
    ]}
    multiTextDealy={1000}
    typeSpeed={50}
    multiTextLoop
  />
  )
}

export default Typing