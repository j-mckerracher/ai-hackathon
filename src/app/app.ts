import { Component } from '@angular/core';
import { Nav } from './components/nav/nav';
import { Hero } from './components/hero/hero';
import { Ticker } from './components/ticker/ticker';
import { About } from './components/about/about';
import { Challenges } from './components/challenges/challenges';
import { Judges } from './components/judges/judges';
import { Register } from './components/register/register';
import { Faq } from './components/faq/faq';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Nav, Hero, Ticker, About, Challenges, Judges, Register, Faq, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
