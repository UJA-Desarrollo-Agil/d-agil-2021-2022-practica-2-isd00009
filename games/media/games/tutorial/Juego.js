// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "df5d5600-a32b-11ec-b230-0800200c9a66"; // GEnerado por http://www.famkruithof.net/uuid/uuidgen

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
        <img src='./media/img/habitacion.jpg' class='float_right' width='150' height='200'>\
          <p>Suena el despertador a las 7:30, después de haber dormido apenas 5 horas, ya que estuviste toda la noche dandole vueltas al partido de hoy. Tienes un día bastante largo por delante, por la mañana debes ir a clase\
				y posteriormente tienes que ir a Madrid para ver el partido en el Bernabéu.\
				Tras perder 5 minutos en Twitter, tienes que decidir entre <a href='./nocomer'>ducharte</a> o <a href='./comer'>desayunar</a> para no llegar tarde a la clase de Desarrollo Ágil</p>", {
            actions: {
                'nocomer': function(character, system, action) {
                    system.setQuality("hambre", character.qualities.hambre + 20);
                    system.doLink('ducha');
                },
                'comer': function(character, system, action) {
                    system.setQuality("hambre", character.qualities.hambre - 20);
                    system.doLink('desayuno');
                }
            }
        }
    ),
    ducha: new undum.SimpleSituation(
        "<h1>En la universidad</h1>\
			<p>Has llegado a clase justo a las 8:30, pero tienes que esperar a que llegue Victor, que viene un poco tarde.\
				En clase continuas haciendo tu práctica de undum, que se entrega la semana que viene y aun ni has empezado (como de costumbre). A mitad de clase empiezas a notar \
				algo de hambre y te arrepientes de no haber desayunado antes. Al terminar la clase, piensas en <a href='./comer'>ir a la cafetería</a> para desayunar, ya que te espera un largo viaje hacia Madrid. Pero por otro lado\
				piensas en <a href='./nocomer'>ir ya hacia Madrid</a> para así llegar antes, comer allí y descansar el resto del día hasta el partido.</p>", {
            actions: {
                'nocomer': function(character, system, action) {
                    system.setQuality("hambre", character.qualities.hambre + 20);
                    system.doLink('irmadrid');
                },
                'comer': function(character, system, action) {
                    system.setQuality("hambre", character.qualities.hambre - 20);
                    system.doLink('cafeteria');
                }
            }
        }

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
            y posiblemente no vuelvas a comer hasta despues del partido. Así que si no tienes mucha hambre puedes salir a <a href='./nocomer'>dar una vuelta</a> para ver el ambiente o <a href='./sicomer'>quedarte en el hotel para comer</a> y descansar un rato.</p>", {
            actions: {
                'nocomer': function(character, system, action) {
                    system.setQuality("hambre", character.qualities.hambre + 20);
                    if (character.qualities.hambre >= 100) {
                        system.doLink('inanicion');
                    } else {
                        system.doLink('vuelta');
                    }
                },
                'sicomer': function(character, system, action) {
                    system.setQuality("hambre", character.qualities.hambre - 20);
                    system.doLink('comer');
                }
            }
        }
    ),
    inanicion: new undum.SimpleSituation(
        "<h1>FIN DEL JUEGO</h1>\
            <p>Has muerto de hambre y has sido llevado a tu habitación en ataúd. Estar tanto tiempo sin comer ha sido una mala idea.Ya nunca verás a Mbappé\
            vestido de blanco ni la gran remontada de aquella noche.</p>\
            <h1>FIN</h1>"
    ),
    vuelta: new undum.SimpleSituation(
        "<h1>En la calle</h1>\
            <p>Sales a la calle y vas camino al Bernabéu, te encuentras con una agrupación de gente que tiene pinta de ser violenta y estar drogada, con antorchas, banderas del Real Madrid y de España recitando cánticos del equipo y haciendo el saludo romano.\
            Son integrantes de Ultras Sur. Al ver a esta gente comienzas a temblar y piensas en <a href='volverhotel'>volver al hotel</a>, pero otra parte de ti quiere <a href='seguirestadio'>seguir hacia el estadio.</a></p>\
            <img src='./media/img/ultras.jpg' width='512' height='380'>"
    ),
    comer: new undum.SimpleSituation(
        "<h1>En el estadio</h1>\
            <p>Ya has comido y descansado y te encuentras en el estadio, faltan 5 minutos para empezar el partido. La megafonía empieza a decir los nombres de los jugadores del Madrid y todo el estadio aplaude para animar. Más tarde nombran a los jugadores\
            del PSG y cuando nombran a Mbappé decides <a href='./nopitar'>aplaudir</a> o <a href='./sipitar'>pitar</a>.</p>", {
            actions: {
                'sipitar': function(character, system, action) {
                    system.setQuality("posibilidadFichaje", character.qualities.posibilidadFichaje - 15);
                    system.doLink('pitar');
                },
                'nopitar': function(character, system, action) {
                    system.setQuality("posibilidadFichaje", character.qualities.posibilidadFichaje + 40);
                    system.doLink('aplaudir');
                }
            }
        }
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
            del PSG y cuando nombran a Mbappé decides <a href='./nopitar'>aplaudir</a> o <a href='./sipitar'>pitar</a>.</p>", {
            actions: {
                'sipitar': function(character, system, action) {
                    system.setQuality("posibilidadFichaje", character.qualities.posibilidadFichaje - 15);
                    system.doLink('pitar');
                },
                'nopitar': function(character, system, action) {
                    system.setQuality("posibilidadFichaje", character.qualities.posibilidadFichaje + 40);
                    system.doLink('aplaudir');
                }
            }
        }
    ),
    aplaudir: new undum.SimpleSituation(
        "<h1>En el estadio</h1>\
            <p>Mbappé devuelve el aplauso y sonríe. El PSG se adelanta en la primera mitad gracias a un gol de Mbappé. El partido acaba 0-2 en el marcador global al descanso, por lo que el Madrid lo tiene muy difícil para remontar.\
            Tras el descanso, Benzema aprovecha un error del portero del PSG para marcar el primero. Este gol cambia totalmente la dinámica del partido y el Madrid termina remontando el partido en tan solo 15 minutos. Al terminar el partido\
            Mbappé toma una decision. <a href='./fichaje'>Ver decisión.</a></p1>", {
            actions: {
                'fichaje': function(character, system, action) {
                    if (Math.floor(Math.random() * 100) < 90)
                        system.doLink('fichado');
                    else
                        system.doLink('nofichado');
                }
            }
        }
    ),
    pitar: new undum.SimpleSituation(
        "<h1>En el estadio</h1>\
            <p>Mbappé muestra un rostro serio y marcha hacia el terreno de juego. El PSG se adelanta en la primera mitad gracias a un gol de Mbappé. El partido acaba 0-2 en el marcador global al descanso, por lo que el Madrid lo tiene muy difícil para remontar.\
            Tras el descanso, Benzema aprovecha un error del portero del PSG para marcar el primero. Este gol cambia totalmente la dinámica del partido y el Madrid termina remontando el partido en tan solo 15 minutos. Al terminar el partido\
            Mbappé toma una decision. <a href='./fichaje'>Ver decisión.</a></p1>", {
            actions: {
                'fichaje': function(character, system, action) {
                    if (Math.floor(Math.random() * 100) < 35)
                        system.doLink('fichado');
                    else
                        system.doLink('nofichado');
                }
            }
        }
    ),
    fichado: new undum.SimpleSituation(
        "<h1>MBAPPÉ FICHA POR EL REAL MADRID</h1>\
            <p>El jugador francés acaba fichando por el Real Madrid. El traspaso se hará efectivo este verano y ficha por 6 temporadas.</p>\
            <img src='./media/img/mbappemadrid.jpg' width='512' height='340'>\
            <h1>FIN</h1>"
    ),
    nofichado: new undum.SimpleSituation(
        "<h1>MBAPPÉ SE QUEDA EN EL PSG</h1>\
            <p>El club parisino ha ofrecido al jugador 50 millones anuales y rechaza la oferta del Real Madrid.</p>\
            <img src='./media/img/mbappecarcel.jpg' width='512' height='340'>\
            <h1>FIN</h1>"
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