"use client";

import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Layout, Progress, Typography } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import contentData from "../../content/contentData";
import "./quiz.css";

const { Header, Content } = Layout;
const { Title, Text } = Typography;

export default function QuizPage() {
  const router = useRouter();

  // --- Local State Management (replacing useQuiz) ---
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [feedbackQuote, setFeedbackQuote] = useState("");

  // Load and Map Question Data
  useEffect(() => {
    if (contentData.quiz_data && contentData.quiz_data.length > 0) {
      // Map data new structure vs UI expectation
      const mappedQuestions = contentData.quiz_data.map((q) => {
        // Find index of the correct answer string in the options array
        const correctIndex = q.answer_points.findIndex(
          (opt) => opt === q.correct_answer
        );
        return {
          question: q.question,
          options: q.answer_points, // New field name in contentData
          correctAnswer: correctIndex !== -1 ? correctIndex : 0, // Fallback to 0 if not matched
          explanation: q.explanation, // New field for detailed feedback
        };
      });
      setQuestions(mappedQuestions);
    }
  }, []);

  const totalQuestions = questions.length;
  const currentQuestion = questions[currentQuestionIndex];

  // Logic: Quotes for correct answers
  const getSuccessQuote = () => {
    const quotes = [
      "Khá lắm! 'Các vua Hùng đã có công dựng nước, Bác cháu ta phải cùng nhau giữ lấy nước.'",
      "Tuyệt vời! 'Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công.'",
      "Chính xác! 'Dễ trăm lần không dân cũng chịu, khó vạn lần dân liệu cũng xong.'",
      "Rất tốt! 'Không có gì quý hơn độc lập, tự do.'",
      "Đúng rồi! 'Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải trồng người.'",
    ];
    return quotes[Math.floor(Math.random() * quotes.length)];
  };

  const handleAnswerSelect = (index) => {
    setSelectedAnswer(index);
    setShowAnswer(true);

    if (index === currentQuestion.correctAnswer) {
      setScore(score + 1);
      setFeedbackQuote(getSuccessQuote());
    } else {
      setFeedbackQuote(
        "Rất tiếc! Hãy ghi nhớ lời Bác: 'Thất bại là mẹ thành công'."
      );
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowAnswer(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowAnswer(false);
    setScore(0);
    setQuizCompleted(false);
  };

  // --- Render Views ---

  if (questions.length === 0) {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Header
          style={{
            position: "fixed",
            top: 0,
            width: "100%",
            zIndex: 1000,
            background: "#a84334",
            padding: "0 16px",
            height: "56px",
            lineHeight: "56px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "100%",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <Button
                type="text"
                icon={<ArrowLeftOutlined />}
                onClick={() => router.push("/assignment-vnr202")}
                style={{
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  fontSize: "16px",
                  height: "40px",
                  padding: "0 8px",
                }}
                title="Quay về trang chính"
              />
              <Title level={4} style={{ color: "white", margin: 0 }}>
                Loading...
              </Title>
            </div>
          </div>
        </Header>
        <Content
          style={{ paddingTop: "56px", minHeight: "calc(100vh - 56px)" }}
        >
          <div className="quiz-container">
            <div className="quiz-loading">
              <div className="loading-icon">📚</div>
              <Text style={{ fontSize: "18px", color: "#0f1f3d" }}>
                Đang tải dữ liệu câu hỏi từ Tư tưởng Hồ Chí Minh...
              </Text>
            </div>
          </div>
        </Content>
      </Layout>
    );
  }

  if (quizCompleted) {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Header
          style={{
            position: "fixed",
            top: 0,
            width: "100%",
            zIndex: 1000,
            background: "#a84334",
            padding: "0 16px",
            height: "56px",
            lineHeight: "56px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "100%",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <Button
                type="text"
                icon={<ArrowLeftOutlined />}
                onClick={() => router.push("/assignment-vnr202")}
                style={{
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  fontSize: "16px",
                  height: "40px",
                  padding: "0 8px",
                }}
                title="Quay về trang chính"
              />
              <div
                style={{
                  width: 40,
                  height: 26,
                  background: "#d43731",
                  position: "relative",
                  borderRadius: 3,
                  border: "1px solid #b91c1c",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="#f9f350"
                  style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.3))" }}
                >
                  <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
                </svg>
              </div>
              <Title
                level={4}
                style={{
                  color: "white",
                  margin: 0,
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                Quiz Hoàn thành
              </Title>
            </div>
          </div>
        </Header>
        <Content
          style={{ paddingTop: "56px", minHeight: "calc(100vh - 56px)" }}
        >
          <div className="quiz-container">
            <div className="quiz-completed">
              <div className="completed-icon">🎉</div>
              <Title
                level={2}
                style={{
                  textAlign: "center",
                  color: "#a84334",
                  marginBottom: "8px",
                }}
              >
                Chúc mừng!
              </Title>
              <Text
                style={{
                  fontSize: "18px",
                  color: "#0f1f3d",
                  textAlign: "center",
                  display: "block",
                  marginBottom: "32px",
                }}
              >
                Bạn đã hoàn thành bài trắc nghiệm về Tư tưởng Hồ Chí Minh
              </Text>
              <div className="score-display">
                <Text className="score-number">
                  {score}/{totalQuestions}
                </Text>
                <Text className="score-percentage">
                  {Math.round((score / totalQuestions) * 100)}%
                </Text>
                <Text
                  style={{ fontSize: "14px", color: "#666", marginTop: "8px" }}
                >
                  Tỷ lệ đúng
                </Text>
              </div>
              <Button
                type="primary"
                onClick={resetQuiz}
                className="reset-button"
              >
                Làm lại quiz
              </Button>
            </div>
          </div>
        </Content>
      </Layout>
    );
  }

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1000,
          background: "#a84334",
          padding: "0 16px",
          height: "56px",
          lineHeight: "56px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Button
              type="text"
              icon={<ArrowLeftOutlined />}
              onClick={() => router.push("/assignment-vnr202")}
              style={{
                color: "white",
                display: "flex",
                alignItems: "center",
                fontSize: "16px",
                height: "40px",
                padding: "0 8px",
              }}
              title="Quay về trang chính"
            />
            <div
              style={{
                width: 40,
                height: 26,
                background: "#d43731",
                position: "relative",
                borderRadius: 3,
                border: "1px solid #b91c1c",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="#f9f350"
                style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.3))" }}
              >
                <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
              </svg>
            </div>
            <Title
              level={4}
              style={{
                color: "white",
                margin: 0,
                fontSize: "18px",
                fontWeight: "600",
              }}
            >
              Quiz: Tư tưởng & Đạo đức 4.0
            </Title>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <Text style={{ color: "white", fontSize: "16px" }}>
              Câu {currentQuestionIndex + 1}/{totalQuestions}
            </Text>
            <Progress
              percent={((currentQuestionIndex + 1) / totalQuestions) * 100}
              showInfo={false}
              strokeColor="#ffffff"
              trailColor="rgba(255,255,255,0.3)"
              style={{ width: "200px" }}
            />
          </div>
        </div>
      </Header>
      <Content style={{ paddingTop: "56px", minHeight: "calc(100vh - 56px)" }}>
        <div className="quiz-container">
          <div className="quiz-question">
            <div className="question-header">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "16px",
                }}
              >
                <div className="question-number">
                  {currentQuestionIndex + 1}
                </div>
                <Text style={{ fontSize: "14px", color: "#666" }}>
                  Câu hỏi {currentQuestionIndex + 1} / {totalQuestions}
                </Text>
              </div>
              <div className="question-title">{currentQuestion?.question}</div>
            </div>
            <div className="quiz-options">
              {currentQuestion?.options.map((option, index) => (
                <Button
                  key={index}
                  className={`quiz-option ${
                    showAnswer
                      ? index === currentQuestion.correctAnswer
                        ? "correct"
                        : index === selectedAnswer
                        ? "incorrect"
                        : ""
                      : selectedAnswer === index
                      ? "selected"
                      : ""
                  }`}
                  onClick={() => !showAnswer && handleAnswerSelect(index)}
                  disabled={showAnswer}
                  block
                  style={{
                    marginBottom: "12px",
                    height: "auto",
                    padding: "16px 20px",
                    textAlign: "left",
                    whiteSpace: "normal",
                    fontSize: "16px",
                  }}
                >
                  <span className="option-letter">
                    {String.fromCharCode(65 + index)}.
                  </span>
                  {option}
                </Button>
              ))}
            </div>
            {showAnswer && (
              <div
                className={`answer-feedback ${
                  selectedAnswer === currentQuestion.correctAnswer
                    ? "correct"
                    : "incorrect"
                }`}
              >
                <Text
                  style={{
                    fontSize: "16px",
                    color:
                      selectedAnswer === currentQuestion.correctAnswer
                        ? "#52c41a"
                        : "#ff4d4f",
                    fontWeight: "bold",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  {selectedAnswer === currentQuestion.correctAnswer
                    ? "✓ Đúng! "
                    : "✗ Sai. "}
                  Đáp án:{" "}
                  {String.fromCharCode(65 + currentQuestion.correctAnswer)}.
                  {/* Feedback based on Hcm quotes */}
                  <br />
                  <span style={{ fontStyle: "italic", fontWeight: "normal" }}>
                    {feedbackQuote}
                  </span>
                </Text>

                {/* Show explanation if available */}
                {currentQuestion.explanation && (
                  <div
                    style={{
                      marginTop: "12px",
                      padding: "10px",
                      backgroundColor: "rgba(255,255,255,0.6)",
                      borderRadius: "8px",
                      fontSize: "14px",
                    }}
                  >
                    <strong>Giải thích: </strong>
                    {currentQuestion.explanation}
                  </div>
                )}
              </div>
            )}
            {showAnswer && (
              <div className="quiz-navigation">
                <Button
                  type="primary"
                  onClick={nextQuestion}
                  className="next-button"
                >
                  {currentQuestionIndex < totalQuestions - 1
                    ? "Câu tiếp theo"
                    : "Xem kết quả"}
                </Button>
              </div>
            )}
          </div>
        </div>
      </Content>
    </Layout>
  );
}