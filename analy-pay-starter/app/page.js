export default function Page() {
  return (
    <main style={{minHeight:"100vh", display:"grid", placeItems:"center", textAlign:"center", padding:"48px"}}>
      <div>
        <h1 style={{fontSize:"40px", fontWeight:700, marginBottom:"12px"}}>AnalyPay</h1>
        <p style={{fontSize:"18px", opacity:0.8, marginBottom:"24px"}}>
          소비는 기록이 아니라 <b>분석</b>입니다. AI가 내 소비 패턴을 이해하고 인사이트를 제공합니다.
        </p>
        <a href="#" style={{display:"inline-block", padding:"12px 18px", border:"1px solid #222", borderRadius:10, textDecoration:"none"}}>
          시작하기
        </a>
      </div>
    </main>
  );
}
