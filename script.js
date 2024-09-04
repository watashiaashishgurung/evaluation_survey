document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const date = document.getElementById('date').value;
    const probleem = document.getElementById('probleem').value;
    const reproduceren = document.getElementById('reproduceren').value;
    const verwachteuitkomst = document.getElementById('verwachteuitkomst').value;
    const werkelijkeuitkomst = document.getElementById('werkelijkeuitkomst').value;
    const eerstepoging = document.getElementById('eerstepoging').value;
    const oorzaken = document.getElementById('oorzaken').value;
    const informatie = document.getElementById('informatie').value;

    document.getElementById('userDate').textContent = date;
    document.getElementById('userProbleem').textContent = probleem;
    document.getElementById('userReproduceren').textContent = reproduceren;
    document.getElementById('userVerwachteuitkomst').textContent = verwachteuitkomst;
    document.getElementById('userWerkelijkeuitkomst').textContent = werkelijkeuitkomst;
    document.getElementById('userEerstepoging').textContent = eerstepoging;
    document.getElementById('userOorzaken').textContent = oorzaken;
    document.getElementById('userInformatie').textContent = informatie;

    document.getElementById('userInfo').style.display = 'block';
});