(() => {

    console.log('fired! javascript is working!');

    let theBadges = document.querySelectorAll ('img');
    console.log(theBadges);

    function logMyId() {
        debugger;
        console.log(this.id);
    }

    theBadges.forEach(badge => badge.addEventListener ('click', logMyId));
})();

