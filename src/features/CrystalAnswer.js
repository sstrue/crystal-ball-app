import React from 'react';
import "./CrystalAnswer.css";

const possibleAnswers = [
    'The spirits smile upon you. The outcome is good.',
    'The outlook is positive.',
    'The spirits believe the answer to be yes.',
    'All paths point to yes.',
    'The spirits are certain.',
    'What you desire will soon be yours.',
    'Your friends will help you achieve your wishes.',
    'Fortune is fated for you; wait patiently.',
    'Your wish will soon come true.',
    'The spirits are untroubled.',
    'The spirits see unexpected news just over the horizon.',
    'Prepare for a change in this matter.',
    'Your endeavors will not return as soon as you expect.',
    'An obstacle blocks your path to success at the present.',
    'The clouds obscure the horizon. Ask again later.',
    'You are being led astray by your own deceitful beliefs or duplicity from another.',
    'Be cautious in your pursuits for this query.',
    'The spirits say no.',
    'The spirits are silent in this matter.',
    'Now is not the time to pursue your desires. Instead reflect inward.'
  ];

  const getPossibleAnswer = () => {
    return possibleAnswers[Math.floor(Math.random() * possibleAnswers.length)];
  };

function CrystalAnswer() {
    const answer = getPossibleAnswer();
    
        return (
            <div className="ball fade-in">
                <p>{answer}</p>
            </div>
        );
}

export default CrystalAnswer;