export const metadata = {
  title: "AnalyPay",
  description: "AI 소비 내역 분석 서비스",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body style={{margin:0, fontFamily:"ui-sans-serif, -apple-system, Segoe UI, Roboto, Helvetica"}}>
        {children}
      </body>
    </html>
  );
}
