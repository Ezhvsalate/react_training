import React, {Component} from "react";
import classes from './Quiz.module.css'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends Component {
    state = {
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
        return this.state.activeQuestion + 1 < this.state.quiz.length
    }

    onAnswerClickHandler = (answerId) => {
        console.log(answerId);
        const question = this.state.quiz[this.state.activeQuestion];
        if (question.rightAnswerId === answerId)
        {

            // this.setState({answerState: answerState});

            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished())
                    this.setState({activeQuestion: this.state.activeQuestion + 1});
                else
                    console.log("It's all");
                window.clearTimeout(timeout)
            }, 1000);

        } else {
            const answerState = {[answerId]: 'error'};
            console.log(answerState);
            this.setState({answerState: answerState});
            console.log('wrong');
            console.log(this.state)
        }
    };

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Ответьте на все вопросы</h1>

                    <ActiveQuiz question={this.state.quiz[this.state.activeQuestion].question}
                                answers={this.state.quiz[this.state.activeQuestion].answers}
                                onAnswerClick={this.onAnswerClickHandler}
                                quizLength={this.state.quiz.length}
                                answerNumber={this.state.activeQuestion + 1}
                                state={this.state.answerState}/>
                </div>
            </div>
        )
    }
}

export default Quiz