import React, {Component} from 'react';
import classes from './QuizCreator.module.css'
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import {createControl, validate, validateForm} from '../../form/formFramework'
import Select from "../../components/UI/Select/Select";
import {connect} from "react-redux";
import {createQuizQuestion, finishCreateQuiz} from '../../store/actions/create';

function createOptionControl(number) {
    return createControl({label: `Вариант ${number}`, errorMessage: 'Значение не может быть пустым'}, {required: true})
}

function createFormControls() {
    return {
        question: createControl({label: 'Введите вопрос', errorMessage: 'Вопрос не может быть пустым'}, {required: true}),
        option1: createOptionControl(1),
        option2: createOptionControl(2),
        option3: createOptionControl(3),
        option4: createOptionControl(4),
    }
}

class QuizCreator extends Component {

    state = {
        isFormValid: false,
        rightAnswerId: 1,
        formControls: createFormControls()
    };

    submitHandler = event => {
        event.preventDefault();
    };

    addQuestionHandler = (event) => {
        event.preventDefault();
        const questionItem = {
            question: this.state.formControls.question.value,
            id: this.props.quiz.length + 1,
            rightAnswerId: this.state.rightAnswerId,
            answers: [
                {text: this.state.formControls.option1.value, id: 1},
                {text: this.state.formControls.option2.value, id: 2},
                {text: this.state.formControls.option3.value, id: 3},
                {text: this.state.formControls.option4.value, id: 4},
            ]
        };
        this.props.createQuizQuestion(questionItem);
        this.setState({
                isFormValid: false,
                rightAnswerId: 1,
                formControls: createFormControls()
            }
        )
    };

    createQuizHandler = event => {
        event.preventDefault();

        this.setState({
            quiz: [],
            isFormValid: false,
            rightAnswerId: 1,
            formControls: createFormControls()
        });
        this.props.finishCreateQuiz()

    };

    changeHandler = (value, controlName) => {
        const formControls = {...this.state.formControls};
        const control = {...formControls[controlName]};
        control.touched = true;
        control.value = value;
        control.valid = validate(control.value, control.validation);
        formControls[controlName] = control;
        this.setState({formControls, isFormValid: validateForm(formControls)})
    };

    selectChangeHandler = event => {
        console.log(event.target.value);
        this.setState({rightAnswerId: +event.target.value})
    };

    renderInputs() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName];
            return (
                <React.Fragment key={`${controlName}__${index}`}>
                    <Input
                        key={`${controlName}__${index}`}
                        label={control.label}
                        value={control.value}
                        valid={control.valid}
                        shouldValidate={!!control.validation}
                        touched={control.touched}
                        errorMessage={control.errorMessage}
                        onChange={event => this.changeHandler(event.target.value, controlName)}/>
                    {index === 0 ? <hr/> : null}
                </React.Fragment>)

        })
    }

    render() {
        return (
            <div className={classes.QuizCreator}>
                <div>
                    <h1>Создание теста</h1>
                    <form onSubmit={this.submitHandler}>
                        {this.renderInputs()}
                        <Select
                            label="Выберите правильный ответ"
                            value={this.state.rightAnswerId}
                            onChange={this.selectChangeHandler}
                            options={[
                                {text: 1, value: 1},
                                {text: 2, value: 2},
                                {text: 3, value: 3},
                                {text: 4, value: 4},
                            ]}
                        />
                        <Button type='primary' onClick={this.addQuestionHandler} disabled={!this.state.isFormValid}>Добавить вопрос</Button>
                        <Button type='success' onClick={this.createQuizHandler} disabled={!this.props.quiz.length === 0}>Создать тест</Button>

                    </form>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        quiz: state.create.quiz
    }
}

function mapDispatchToProps(dispatch) {
    return {
        createQuizQuestion: item => dispatch(createQuizQuestion(item)),
        finishCreateQuiz: () => dispatch(finishCreateQuiz())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizCreator);