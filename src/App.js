import { useState, useEffect } from 'react';
import Card from './components/Cards';
import shuffle from './utilities/shuffle';



function App() {
  const [cards, setCards] = useState(shuffle); // Cards array from assets
  const [pickOne, setPickOne] = useState(null); // First selection
  const [pickTwo, setPickTwo] = useState(null); // Second selection
  const [disabled, setDisabled] = useState(false); // Delay handler
  const [wins, setWins] = useState(0); // Win streak

   // Handle card selection
   const handleClick = (card) => {
    if (!disabled) {
      pickOne ? setPickTwo(card) : setPickOne(card);
    }
  };

  const handleTurn = () => {
    setPickOne(null);
    setPickTwo(null);
    setDisabled(false);
  };

  // Used for selection and match handling
  useEffect(() => {
    let pickTimer;

    // Two cards have been clicked
    if (pickOne && pickTwo) {
      // Check if the cards the same
      if (pickOne.image === pickTwo.image) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.image === pickOne.image) {
              // Update card property to reflect match
              return { ...card, matched: true };
            } else {
              // No match
              return card;
            }
          });
        });
        handleTurn();
      } else {
        // Prevent new selections until after delay
        setDisabled(true);
        // Add delay between selections
        pickTimer = setTimeout(() => {
          handleTurn();
        }, 1000);
      }
    }

    return () => {
      clearTimeout(pickTimer);
    };
  }, [cards, pickOne, pickTwo]);

    // If player has found all matches, handle accordingly
    useEffect(() => {
      // Check for any remaining card matches
      const checkWin = cards.filter((card) => !card.matched);
  
      // All matches made, handle win/badge counters
      if (cards.length && checkWin.length < 1) {
        console.log('You win!');
        setWins(wins + 1);
        handleTurn();
        setCards(shuffle);
      }
    }, [cards, wins]);


  return (
    <>

      <div className="grid">
        {cards.map((card) => {
          const { image, id, matched } = card;
          
          return (
            <Card
              key={id}
              image={image}
              selected={card === pickOne || card === pickTwo || matched}
              onClick={() => handleClick(card)}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;