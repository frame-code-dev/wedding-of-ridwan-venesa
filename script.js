/* =====================================================
   BUKA UNDANGAN
===================================================== */

function openInvitation(){

    const opening =
        document.getElementById("opening");

    const music =
        document.getElementById("music");


    opening.classList.add("hide");


    if(music){

        music.volume = 0.45;

        music.play().catch(() => {});

    }

}



/* =====================================================
   MUSIK
===================================================== */

function toggleMusic(){

    const music =
        document.getElementById("music");

    const button =
        document.getElementById("musicButton");


    if(music.paused){

        music.play().catch(() => {});

        button.innerHTML = "♪";

    }

    else{

        music.pause();

        button.innerHTML = "🔇";

    }

}



/* =====================================================
   COUNTDOWN
===================================================== */

const weddingDate =
    new Date(
        "September 20, 2026 07:30:00"
    ).getTime();


function countdown(){

    const now =
        new Date().getTime();


    const distance =
        weddingDate - now;


    if(distance <= 0){

        document.getElementById("days").innerHTML = "00";

        document.getElementById("hours").innerHTML = "00";

        document.getElementById("minutes").innerHTML = "00";

        document.getElementById("seconds").innerHTML = "00";

        return;

    }


    const days =
        Math.floor(
            distance /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (
                distance %
                (1000 * 60 * 60 * 24)
            ) /
            (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            (
                distance %
                (1000 * 60 * 60)
            ) /
            (1000 * 60)
        );


    const seconds =
        Math.floor(
            (
                distance %
                (1000 * 60)
            ) /
            1000
        );


    document.getElementById("days").innerHTML =
        String(days).padStart(2,"0");


    document.getElementById("hours").innerHTML =
        String(hours).padStart(2,"0");


    document.getElementById("minutes").innerHTML =
        String(minutes).padStart(2,"0");


    document.getElementById("seconds").innerHTML =
        String(seconds).padStart(2,"0");

}


countdown();

setInterval(
    countdown,
    1000
);



/* =====================================================
   COPY REKENING
===================================================== */

function copyRekening(number){

    navigator.clipboard
        .writeText(number)
        .then(() => {

            const message =
                document.getElementById(
                    "copyMessage"
                );


            message.innerHTML =
                "✓ Nomor rekening berhasil disalin";


            setTimeout(
                () => {

                    message.innerHTML = "";

                },
                2500
            );

        })
        .catch(() => {

            alert(
                "Nomor rekening: " +
                number
            );

        });

}



/* =====================================================
   GOOGLE MAPS SEMENTARA
===================================================== */

function showMapMessage(){

    alert(

        "📍 Lokasi Google Maps belum dimasukkan.\n\n" +

        "Nanti setelah TIKOR dari customer dikirim, " +

        "link Google Maps tinggal dimasukkan di sini."

    );

}



/* =====================================================
   NAMA TAMU DARI LINK
===================================================== */

const params =
    new URLSearchParams(
        window.location.search
    );


const guest =
    params.get("to");


if(guest){

    const guestElement =
        document.getElementById(
            "guestName"
        );


    if(guestElement){

        guestElement.innerText =
            guest;

    }

}