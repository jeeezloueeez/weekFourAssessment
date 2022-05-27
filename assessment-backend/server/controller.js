module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ['A beautiful, smart, and loving person will be coming into your life.', 'A good time to finish up old tasks.', 'All the effort you are making will ultimately pay off.', 'Be careful or you could fall for some tricks today.', 'Congratulations! You are on your way.', 'Every wise man started out by asking many questions.', 'Fearless courage is the foundation of victory.']

        let randomIndex = Math.floor(Math.random() * fortunes.length)
        let randomFortune = fortunes[randomIndex]

        res.status(200).send(randomFortune)
    },
    encourage: (req, res) => {
        const encouragement = ['“Never give up, for that is just the place and time that the tide will turn.” – Harriet Beecher Stowe', '“We must embrace pain and burn it as fuel for our journey.” – Kenji Miyazawa', '“Focus on the journey, not the destination. Joy is found not in finishing an activity but in doing it.” – Greg Anderson', '“Discouragement and failure are two of the surest stepping stones to success.” – Dale Carnegie', '“Do not let what you cannot do interfere with what you can do.” – John Wooden', '“If there is no struggle, there is no progress.“ – Frederick Douglass', '“A ship is always safe at the shore – but that is NOT what it is built for.” – Albert Einstein']

        let randomIndex = Math.floor(Math.random() * encouragement.length)
        let randomEncouragement = encouragement[randomIndex]

        res.status(200).send(randomEncouragement)
    },
    inspire: (req, res) => {
        const inspirational = ['"Success is not final; failure is not fatal: It is the courage to continue that counts." — Winston S. Churchill', '“Success usually comes to those who are too busy looking for it.” — Henry David Thoreau', `“If you are working on something that you really care about, you don't have to be pushed. The vision pulls you.” — Steve Jobs`, '“When we strive to become better than we are, everything around us becomes better too.” — Paulo Coelho', '“Just one small positive thought in the morning can change your whole day.” — Dalai Lama', `“Don't let someone else's opinion of you become your reality" — Les Brown`, `“If you're not positive energy, you're negative energy.” Mark Cuban`]

        let randomIndex = Math.floor(Math.random() * inspirational.length)
        let randomInspiration = inspirational[randomIndex]

        res.status(200).send(randomInspiration)
    },
    help: (req, res) => {
        const websites = ['https://www.w3schools.com', ' https://www.codewars.com', ' https://developer.mozilla.org/en-US/', ' https://www.youtube.com/', ' https://www.freecodecamp.org/news']
        res.status(200).send(websites)
    },
    

}