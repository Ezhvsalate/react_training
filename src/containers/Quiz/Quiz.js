import React, {Component} from "react";
import classes from './Quiz.module.css'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz"
import axios from '../../axios/axios-quiz'
import Loader from "../../components/UI/Loader/Loader";

export const ERROR = 'error';
export const SUCCESS = 'success';

class Quiz extends Component {
    state = {
        loading: true,
        results: {},  // {[id]: 'success' || 'error'}
        isFinished: false,
        activeQuestion: 0,
        answerState: null, // {[id]: 'success' || 'error'}
        quiz: [{
            id: 1,
            question: 'Че каво, епт?',
            rightAnswerId: 3,
            answers: [
                {text: 'Не, ничо', id: 1},
                {text: 'Отвали', id: 2},
                {text: 'Все огонь', id: 3},
                {text: 'Все, пока', id: 4},
            ]
        }, {
            id: 2,
            question: 'Кто чаво, епт?',
            rightAnswerId: 1,
            answers: [
                {text: 'Я хз', id: 1},
                {text: 'Ты достал', id: 2},
                {text: 'Ой все', id: 3},
                {text: 'Ну ура', id: 4},
            ]
        }]
    };


    isQuizFinished() {
        return !(this.state.activeQuestion + 1 < this.state.quiz.length)
    }

    async componentDidMount() {
        try {
            const response = await axios.get(`/quizes/${this.props.match.params.id}.json`);
            console.log(response);

            const quiz = response.data;
            this.setState({quiz, loading: false})
        } catch (e) {
            console.log(e)
        }

    }

    onAnswerClickHandler = (answerId) => {
        console.log(answerId);
        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0];
            if (this.state.answerState[key] === SUCCESS) {
                return
            }
        }
        const question = this.state.quiz[this.state.activeQuestion];
        const results = this.state.results;
        if (question.rightAnswerId === answerId) {
            if (!results[question.id]) {
                results[question.id] = SUCCESS
            }
            this.setState({
                answerState: {[answerId]: SUCCESS},
                results: results
            });
            const timeout = window.setTimeout(() => {
                if (!this.isQuizFinished()) {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                } else {
                    this.setState({isFinished: true});
                }
                window.clearTimeout(timeout)
            }, 1000);

        } else {
            results[question.id] = ERROR;
            this.setState({
                answerState: {[answerId]: ERROR},
                results: results
            });
        }
    };

    retryHandler = () => {
        this.setState({
            results: {},
            isFinished: false,
            activeQuestion: 0,
            answerState: null,
        })
    };

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Ответьте на все вопросы</h1>
                    {
                        this.state.loading ?
                            <Loader/>
                            :
                            this.state.isFinished ?
                                <FinishedQuiz results={this.state.results}
                                              quiz={this.state.quiz}
                                              onRetry={this.retryHandler}
                                />
                                :
                                <ActiveQuiz question={this.state.quiz[this.state.activeQuestion].question}
                                            answers={this.state.quiz[this.state.activeQuestion].answers}
                                            onAnswerClick={this.onAnswerClickHandler}
                                            quizLength={this.state.quiz.length}
                                            answerNumber={this.state.activeQuestion + 1}
                                            state={this.state.answerState}/>
                    }
                </div>
            </div>
        )
    }
}

export default Quiz
