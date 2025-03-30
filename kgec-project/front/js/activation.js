document.addEventListener('DOMContentLoaded', function() {
   
    const timerElement = document.getElementById('timer');
    let timeLeft = 10;
    
    const countdown = setInterval(function() {
        timeLeft--;
        timerElement.textContent = timeLeft;
        
        if (timeLeft <= 0) {
            clearInterval(countdown);
            // Here you would typically trigger emergency services
            console.log("Emergency services notified!");
        }
    }, 1000);

    
    const emergencyButtons = document.querySelectorAll('.emergency-btn');
    
    emergencyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const optionTitle = this.closest('.emergency-option').querySelector('.option-title').textContent;
            
            
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Activating...';
            this.style.backgroundColor = '#ff5555';
            
            
            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-check"></i> Activated!';
                this.style.backgroundColor = '#00aa00';
                console.log(`${optionTitle} activated`);
                
                // Reset button after 3 seconds
                setTimeout(() => {
                    this.innerHTML = '<i class="fas fa-bolt"></i> ' + this.textContent.replace('Activated!', 'Activate Now').trim();
                    this.style.backgroundColor = '';
                }, 3000);
            }, 1500);
        });
    });

 
    const audio = new Audio('click-sound.mp3'); // Add your sound file
    
    emergencyButtons.forEach(button => {
        button.addEventListener('mousedown', function() {
            audio.currentTime = 0;
            audio.play().catch(e => console.log("Audio play failed:", e));
        });
    });
});