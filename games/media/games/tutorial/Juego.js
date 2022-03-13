// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "89353480-ec80-11e1-aff1-0800200c9a66"; // GEnerado por http://www.famkruithof.net/uuid/uuidgen

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

// En modo depuración, que no haya efectos de jquery
jQuery.fx.off = false

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {
    comienzo: new undum.SimpleSituation(
        "<h1>Tu cuarto</h1>\
        	<p>Suena el despertador a las 7:30, después de haber dormido apenas 5 horas, ya que estuviste toda la noche dandole vueltas al partido de hoy. Tienes un día bastante largo por delante, por la mañana debes ir a clase\
				y posteriormente tienes que ir a Madrid para ver el partido en el Bernabéu.\
				Tras perder 5 minutos en Twitter, tienes que decidir entre <a href='ducha'>ducharte</a> o <a href='desayuno'>desayunar</a> para no llegar tarde a la clase de Desarrollo Ágil</p>"
    ),
    ducha: new undum.SimpleSituation(
        "<h1>En la universidad</h1>\
			<p>Has llegado a clase justo a las 8:30, pero tienes que esperar a que llegue Victor, que viene un poco tarde.\
				En clase continuas haciendo tu práctica de undum, que se entrega la semana que viene y aun ni has empezado (como de costumbre). A mitad de clase empiezas a notar \
				algo de hambre y te arrepientes de no haber desayunado antes. Al terminar la clase, piensas en <a href='cafeteria'>ir a la cafetería</a> para desayunar, ya que te espera un largo viaje hacia Madrid. Pero por otro lado\
				piensas en <a href='irmadrid'>ir ya hacia Madrid</a> para así llegar antes, comer allí y descansar el resto del día hasta el partido.</p>"

    ),
    desayuno: new undum.SimpleSituation(
        "<h1>En la universidad</h1>\
            <p>Has llegado a clase justo a las 8:30, pero tienes que esperar a que llegue Victor, que viene un poco tarde.\
             En clase continuas haciendo tu práctica de undum, que se entrega la semana que viene y aun ni has empezado (como de costumbre). Al terminar la clase, vas hacia Madrid para así llegar pronto, comer allí y descansar el resto\
             del día hasta el partido. <a href='irmadrid'>Continuar.</a></p>"

    ),
    cafeteria: new undum.SimpleSituation(
        "<h1>Saliendo de la cafetería</h1>\
            <p>Ya has desayunado y estás listo para emprender el viaje, pero al salir te encuentras con unos amigos que se dirigen hacia la cafetería y no puedes evitar parate a hablar con ellos sobre el partido de esta noche. Tanto tú\
            como ellos creéis que la remontada del 0-1 de la ida es posible y charlais sobre el posible fichaje de Mbappé. Tras 10 minutos charlando, te despides y marchas hacia Madrid. <a href='irmadrid'>Continuar.</a></p>"

    ),
    irmadrid: new undum.SimpleSituation(
        "<h1>En Madrid</h1>\
            <p>Ya has llegado a Madrid, tu hotel esta situado a apenas 500 metros del estadio y hay un gran ambiente en los alrededores. Te tumbas en la cama del hotel y te empiezas a quedar dormido, pero recuerda que es la hora de comer\
            y posiblemente no vuelvas a comer hasta despues del partido. Así que si no tienes mucha hambre puedes salir a <a href='vuelta'>dar una vuelta</a> para ver el ambiente o <a href='comer'>quedarte en el hotel para comer</a> y descansar un rato.</p>"
    ),
    vuelta: new undum.SimpleSituation(
        "<h1>En la calle</h1>\
            <p>Sales a la calle y vas camino al Bernabéu, te encuentras con una agrupación de gente que tiene pinta de ser violenta y estar drogada, con antorchas, banderas del Real Madrid y de España recitando cánticos del equipo y haciendo el saludo romano.\
            Son integrantes de Ultras Sur. Al ver a esta gente comienzas a temblar y piensas en <a href='volverhotel'>volver al hotel</a>, pero otra parte de ti quiere <a href='seguirestadio'>seguir hacia el estadio.</a></p>"
    ),
    comer: new undum.SimpleSituation(
        "<h1>En el estadio</h1>\
            <p>Ya has comido y descansado, te encuentras en el estadio y faltan 5 minutos para empezar el partido. La megafonía empieza a decir los nombres de los jugadores del Madrid y todo el estadio aplaude para animar. Más tarde nombran a los jugadores\
            del PSG y cuando nombran a Mbappé decides <a href='aplaudir'>aplaudir</a> o <a href='pitar'>pitar</a>.</p>"
    ),
    seguirestadio: new undum.SimpleSituation(
        "<h1>FIN DEL JUEGO</h1>\
            <p>Mientras avanzabas hacia el estadio, los ultras empezaron a mirarte mal y a acorralarte y te acaban pegando una paliza. Terminas muriendo en el hospital debido a la gravedad de tus heridas y vuelves a tu casa en ataúd. Ya nunca verás a Mbappé\
            vestido de blanco ni la gran remontada de aquella noche.</p>\
            <h1>FIN</h1>"
    ),
    volverhotel: new undum.SimpleSituation(
        "<h1>En el estadio</h1>\
            <p>Volviste al hotel sano y salvo, te encuentras en el estadio y faltan 5 minutos para empezar el partido. La megafonía empieza a decir los nombres de los jugadores del Madrid y todo el estadio aplaude para animar. Más tarde nombran a los jugadores\
            del PSG y cuando nombran a Mbappé decides <a href='aplaudir'>aplaudir</a> o <a href='pitar'>pitar</a>.</p>"
    ),
    aplaudir: new undum.SimpleSituation(
        "<h1>En el estadio</h1>\
            <p>Mbappé devuelve el aplauso y sonríe. El PSG se adelanta en la primera mitad gracias a un gol de Mbappé. El partido acaba 0-2 en el marcador global al descanso, por lo que el Madrid lo tiene muy difícil para remontar.\
            Tras el descanso, Benzema aprovecha un error del portero del PSG para marcar el primero. Este gol cambia totalmente la dinámica del partido y el Madrid termina remontando el partido en tan solo 15 minutos.</p1>"
    ),
    pitar: new undum.SimpleSituation(
        "<h1>En el estadio</h1>\
            <p>Mbappé muestra un rostro serio y marcha hacia el terreno de juego. El PSG se adelanta en la primera mitad gracias a un gol de Mbappé. El partido acaba 0-2 en el marcador global al descanso, por lo que el Madrid lo tiene muy difícil para remontar.\
            Tras el descanso, Benzema aprovecha un error del portero del PSG para marcar el primero. Este gol cambia totalmente la dinámica del partido y el Madrid termina remontando el partido en tan solo 15 minutos.</p1>"
    )
};


// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "comienzo";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
    hambre: new undum.IntegerQuality(
        "Hambre", { priority: "0001", group: 'stats' }
    ),
    posibilidadFichaje: new undum.IntegerQuality(
        "Posibilidades del fichaje", { priority: "0001", group: 'stats' }
    )
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    stats: new undum.QualityGroup(null, { priority: "0001" })
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {
    character.qualities.hambre = 50;
    character.qualities.posibilidadFichaje = 50;
};