import logoImg from '../asserts/quiz-logo.png';

export default function Header(){
    return(<header>
    <img src={logoImg} alt="Quiz logo"/>
    <h1>ReactQuiz</h1>
    </header>
    ); 
}