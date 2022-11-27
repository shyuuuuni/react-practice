import './App.css';
import {useEffect, useState} from "react";

const CLIENT_ID = "5052479e47d7a36951cd";
const GITHUB_AUTH_SERVER = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}`;

function App() {
  const [popup, setPopup] = useState();

  const handleOpenPopup = () => {
    const width = 500;
    const height = 400;
    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2;
    const popup = window.open(
        GITHUB_AUTH_SERVER,
        "로그인 중...",
        `width=${width},height=${height},left=${left},top=${top}`
    );
    setPopup(popup);
  }

  useEffect(() => {
    const currentUrl = window.location.href;
    const searchParams = new URL(currentUrl).searchParams;
    const code = searchParams.get("code");
    if (code) {
      window.opener.postMessage({ code }, window.location.origin);
    }
  }, []);

  // 로그인 팝입이 열리면 로그인 로직을 처리합니다.
  useEffect(() => {
    if (!popup) {
      return;
    }

    const githubOAuthCodeListener = (e) => {
      // 동일한 Origin 의 이벤트만 처리하도록 제한
      if (e.origin !== window.location.origin) {
        return;
      }
      const { code } = e.data;
      if (code) {
        console.log(`The popup URL has URL code param = ${code}`);
      }
      popup?.close();
      setPopup(null);
    };

    window.addEventListener("message", githubOAuthCodeListener, false);

    return () => {
      window.removeEventListener("message", githubOAuthCodeListener);
      popup?.close();
      setPopup(null);
    };
  }, [popup]);

  return (
    <div className="App">
      <button onClick={handleOpenPopup}>팝업 열기</button>
    </div>
  );
}

export default App;