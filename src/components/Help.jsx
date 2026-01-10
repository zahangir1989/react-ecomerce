import React, { useState } from "react";
import Navbar from "./Navbar";

const faqData = [
  {
     question: "How do I create an account?",
    answer: "1. Registration Page\nA website provides a Register or Sign Up page.\nThis page usually asks for:\nFull name\nEmail address\nPassword\nConfirm password\n2. User Submits Information\nThe user fills in the form and clicks the Register button to submit their details.\n3. Save to Database\nThe system:\n- Checks if the email already exists\n- Creates a new user record if the email is unique."
  },

  {
    question: "How do I log in?",
    answer: "Use your registered email and password on the Login page."
  },
  {
    question: "I forgot my password. What should I do?",
    answer: "Click on Forgot Password and follow the instructions."
  },
  {
    question: "How can I update my profile?",
    answer: "Go to Dashboard → Profile Settings."
  },
  {
    question: "Which browsers are supported?",
    answer: "Chrome, Firefox, Edge, and Safari."
  }
];

const Help = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [search, setSearch] = useState("");

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const filteredFaq = faqData.filter((item) =>
    item.question.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <section className="pt-12">
      <div style={styles.container}>
        <h1 style={styles.title}>Help & Support</h1>
        <p style={styles.subtitle}>
          Search answers or browse frequently asked questions.
        </p>

        {/* Search */}
        <input
          type="text"
          placeholder="Search help..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.search}
        />

        {/* FAQ */}
        <div style={styles.faqBox}>
          {filteredFaq.length === 0 && (
            <p style={{ color: "#777" }}>No results found.</p>
          )}

          {filteredFaq.map((item, index) => (
            <div key={index} style={styles.faqItem}>
              <div
                style={styles.question}
                onClick={() => toggleFAQ(index)}
              >
                {item.question}
                <span>{activeIndex === index ? "−" : "+"}</span>
              </div>

              {activeIndex === index && (
                <div style={styles.answer}>{item.answer}</div>
              )}
            </div>
          ))}
        </div>

        {/* Contact */}
        <div style={styles.contact}>
          <h3>Still need help?</h3>
          <p>Email: support@yourwebsite.com</p>
          <p>Phone: +880-XXXXXXXXXX</p>
        </div>
      </div>
      </section>
    </>
  );
};

const styles = {
  container: {
    maxWidth: "900px",
    margin: "40px auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif"
  },
  title: {
    fontSize: "36px",
    marginBottom: "10px"
  },
  subtitle: {
    color: "#666",
    marginBottom: "20px"
  },
  search: {
    width: "100%",
    padding: "12px",
    marginBottom: "25px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "1px solid #ccc"
  },
  faqBox: {
    borderRadius: "8px",
    overflow: "hidden"
  },
  faqItem: {
    borderBottom: "1px solid #ddd"
  },
  question: {
    padding: "15px",
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    fontWeight: "bold",
    background: "#f9f9f9"
  },
  answer: {
    padding: "15px",
    background: "#fff",
    color: "#333"
  },
  contact: {
    marginTop: "40px",
    padding: "20px",
    background: "#f3f3f3",
    borderRadius: "8px"
  }
};

export default Help;
