console.log('This file should be linked to every file. If this is not the case, then it is considered a bug.');

// site checker
(function() {
    var identifier = document.createElement('div');
    identifier.id = 'assets-check';
    identifier.style.display = 'none';
    identifier.innerText = 'Site is up';
    document.body.appendChild(identifier);
})();
