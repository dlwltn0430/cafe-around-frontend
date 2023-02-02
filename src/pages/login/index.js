import './index.css';

export default function Login() {
        const REST_API_KEY = "99710e2765654da6e2b18b853f894c08";
        const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
        const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    return (
        <div>
            <h1><a href={KAKAO_AUTH_URL}>Kakao Login</a></h1>
        </div>
    );
}