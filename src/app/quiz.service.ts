import { Injectable } from '@angular/core';
import { Quiz } from './quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  quizzes: Quiz[] = [
    {
      question: 'Which City Called As a Pink City',
      answer: [
        {option:'Jodhpur', correct: false },
        {option:'Jaipur', correct: true },
        {option:'Jaisalmer', correct: false },
        {option:'Udaipur', correct: false }
      ]
    },
    {
      question: 'Jamini Roy was a famous?',
      answer: [
        {option:'Producer', correct: false },
        {option:'Actor', correct: false },
        {option:'Director', correct: false },
        {option:'Painter', correct: true }
      ]
    },
    {
      question: 'India won its first Olympic hockey gold in...?',
      answer: [
        {option:'1928', correct: true },
        {option:'1980', correct: false },
        {option:'1945', correct: false },
        {option:'1867', correct: false }
      ]
    },
    {
      question: 'India largest city by population',
      answer: [
        {option:'Jodhpur', correct: false },
        {option:'Mumbai', correct: true },
        {option:'Pune', correct: false },
        {option:'Nagpur', correct: false }
      ]
    },
    {
      question: 'Which City Called As a Orange City',
      answer: [
        {option:'Amravati', correct: false },
        {option:'Jaipur', correct: false },
        {option:'Nagpur', correct: true },
        {option:'Shegaov', correct: false }
      ]
    }
  ]
  constructor() { }
  getQuizzes(){
    return this.quizzes;
    
  }
}
