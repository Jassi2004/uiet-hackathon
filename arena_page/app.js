document.addEventListener('DOMContentLoaded', function () {
    const punch = document.querySelector('.punch');
    const kick = document.querySelector('.kick');
    const defence = document.querySelector('.defence');
    const specialMove = document.querySelector('.special-move');
    const lifeLine = document.querySelector('.life-line');
    const lifeLineHero = document.querySelector('.life-line-hero');
    const thanos = document.querySelector('.thanos-img');
    const thanos2 = document.querySelector('.thanos2-img');

    let heroPower = 100; // Starting power of the hero
    let thanosPower = 100; // Starting power of Thanos

    let heroRechargeInterval; // Interval for hero power recharge

    punch.addEventListener('click', function () {
        attackThanos(10); // Attack Thanos with power 10 for punch
    });

    kick.addEventListener('click', function () {
        attackThanos(20); // Attack Thanos with power 20 for kick
    });

    defence.addEventListener('click', function () {
        attackThanos(5); // Attack Thanos with power 5 for defence
    });

    specialMove.addEventListener('click', function () {
        attackThanos(30); // Attack Thanos with power 30 for special move
    });

    function attackThanos(power) {

        thanos2.style.zIndex = '20';

        // Revert z-index after 1 second
        setTimeout(function () {
            thanos2.style.zIndex = ''; // Revert to default value
        }, 200);

        thanos.classList.add('attacked'); // Add 'attacked' class to Thanos for animation
        setTimeout(() => {
            thanos.classList.remove('attacked'); // Remove 'attacked' class after a delay
        }, 500); // Remove class after 0.5 seconds

        thanosPower -= power; // Reduce Thanos' power
        if (thanosPower <= 0) {
            thanosPower = 0; // Ensure Thanos' power doesn't go negative
            alert('Thanos defeated!'); // Notify victory
        }
        lifeLine.style.width = thanosPower + '%'; // Update the width of Thanos' health bar

        // Thanos counter attack
        setTimeout(() => {
            heroPower -= 40; // Reduce hero's power due to counter attack
            if (heroPower <= 0) {
                heroPower = 0; // Ensure hero's power doesn't go negative
                alert('You are defeated!'); // Notify defeat
            }
            lifeLineHero.style.width = heroPower + '%'; // Update the width of hero's health bar
        }, 1000); // 1 second delay for Thanos' counter attack

        // Start hero power recharge interval
        if (!heroRechargeInterval) {
            heroRechargeInterval = setInterval(() => {
                heroPower += 5; // Recharge hero's power by 5 every second
                if (heroPower >= 100) {
                    heroPower = 100; // Ensure hero's power doesn't exceed 100
                    clearInterval(heroRechargeInterval); // Stop recharge interval when fully charged
                    heroRechargeInterval = null;
                }
                lifeLineHero.style.width = heroPower + '%'; // Update the width of hero's health bar
            }, 1000); // 1 second interval for power recharge
        }
    }
});
