<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>MAPA | Terreno Eco</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="css/header-menu.css">
    <link rel="stylesheet" href="css/salud.css">


    <script src="https://kit.fontawesome.com/a81368914c.js"></script>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==" crossorigin="" />

    <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==" crossorigin=""></script>

</head>

<body>

    <div id="contenedor" style="margin:4px;height:100%">
<div id="textoCO">
        <h1>Efectos del CO:</h1>
                <br>
                <p> Pequeñas exposiciones podrían producir un intenso dolor de cabeza
                    en el lóbulo temporal o frontal, fatiga, disnea y mareo. Después de la
                    exposición los pacientes que sufren enfermedades cardiovasculares o
                    cerebrovasculares pueden sufrir un empeoramiento, por ejemplo
                    isquemia o infarto de miocardio, o derrame cerebral.
                </p>
                <br>
                <p>Exposiciones moderadas pueden producir fuertes dolores de
                   cabeza, debilidad, mareos, nauseas, vómitos, síncope, taquicardia y
                   taquipnea seguidos por bradicardia y bradipnea, sofocos, cianosis,
                   sudoración, disminución de la atención, disminución de la destreza
                   manual, reducción en el desempeño de tareas sensitivomotoras, aumento
                   del tiempo de reacción, dificultad al pensar, reducción del juicio, vista
                   borrosa o oscurecida, ataxia, pérdida del control muscular, silbidos o
                   fuertes zumbidos en el oído, somnolencia, alucinaciones y toxicidad
                   cardiovascular.
                </p>
                <br>
                <p>Exposiciones graves pueden producir sincope, ataques, confusión,
                   desorientación, convulsiones, evacuación involuntaria, ampollas, toxicidad
                   cardiovascular, disrítmias ventriculares, depresión cardiorrespiratoria,
                   edema pulmonar, fallo respiratorio, estupor, perdida del conocimiento,
                   coma, colapso y muerte.
                </p>
                <br>
                <div class="tabla">
                    <table  >
                        <thead>
                            <tr>
                                <th>Concentración de
                                    monóxido de carbono</th>
                                <th>Efecto</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="berde">0-229 mg/m3 (0-200
                                    ppm)</td>
                                <td class="berde">Ligero dolor de cabeza en algunos casos</td>
                            </tr>
                            <tr>
                                <td class="berde">10 mg/m3 (8,7 ppm)</td>
                                <td class="berde">No se excede el nivel carboxihemoglobina del
                                    2.5 %, aun cuando un sujeto normal realice
                                    ejercicio ligero o moderado durante 8 horas</td>
                            </tr>
                            <tr>
                                <td class="berde">30 mg/m3 (26 ppm)</td>
                                <td class="berde">No se excede el nivel carboxihemoglobina del
                                    2.5 %, aun cuando un sujeto normal realice
                                    ejercicio ligero o moderado durante una hora
                                </td>
                            </tr>

                            <tr>
                                <td class="naranga">34,4 mg/m3 (30 ppm)</td>
                                <td class="naranga">La exposición diaria a esta concentración es
                                    equivalente a fumar 20 cigarrillos al día
                                </td>
                            </tr>
                            <tr>
                                <td class="naranga">40,1 mg/m3 (35 ppm)</td>
                                <td class="naranga">Las personas que tienen enfermedades cardíacas no deben exponerse a niveles superiores a esta concentración
                                </td>
                            </tr>
                            <tr>
                                <td class="rogo">60 mg/m3 (52 ppm)</td>
                                <td class="rogo">No se excede el nivel carboxihemoglobina del
                                    2.5 %, aun cuando un sujeto normal realice
                                    ejercicio ligero o moderado durante 30
                                    minutos
                                </td>
                            </tr>
                            <tr>
                                <td class="rogo">100 mg/m3 (87 ppm)</td>
                                <td class="rogo">No se excede el nivel carboxihemoglobina del
                                    2.5 %, aun cuando un sujeto normal realice
                                    ejercicio ligero o moderado durante 15
                                    minutos
                                </td>
                            </tr>
                            <tr>
                                <td class="rogo">115 mg/m3 (100 ppm)</td>
                                <td class="rogo">Se informó del primer indicio de angina en
                                    sujetos que hacían ejercicio con cardiopatía
                                    coronaria expuestos a esta concentración</td>
                            </tr>
                            <tr>
                                <td class="rogo">229-458 mg/m3
                                    (200-400 ppm)</td>
                                <td class="rogo">Después de 5-6 horas se puede observar un
                                    leve dolor de cabeza, náuseas, vértigo y
                                    síntomas mentales
                                </td>
                            </tr>

                            <tr>
                                <td class="rogo">458-802 mg/m3
                                    (400-700 ppm)</td>
                                <td class="rogo">Después de 4-5 horas se puede observar un
                                    fuerte dolor de cabeza, incoordinación
                                    muscular, debilidad, vómitos y colapso
                                </td>
                            </tr>
                            <tr>
                                <td class="rogo">802-1260 mg/m3
                                    (700-1100 ppm)
                                </td>
                                <td class="rogo">Después de 3-5 horas se puede observar un
                                    fuerte dolor de cabeza, debilidad, vómitos y
                                    colapso
                                </td>
                            </tr>
                            <tr>
                                <td class="rogo">1260-1832 mg/m3
                                    (1100-1600 ppm)</td>
                                <td class="rogo">Después de 1.5-3 horas se puede observar
                                    coma. (la respiración es aún bastante buena
                                    a no ser que el envenenamiento se haya
                                    prolongado)
                                </td>
                            </tr>
                            <tr>
                                <td class="rogo">1832-2290 mg/m3
                                    (1600-2000 ppm)</td>
                                <td class="rogo">Después de 1-1.5 horas hay posibilidad de
                                    muerte
                                </td>
                            </tr>
                            <tr>
                                <td class="rogo">5726-11452 mg/m3
                                    (5000-10000 ppm)</td>
                                <td class="rogo">Después de 2-15 minutos se puede producir
                                    la muerte
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                <br>
                <h2> Recomendaciones: </h2>
                <p> Se produce cuando se queman materiales combustibles como gas,
                    gasolina, keroseno, carbón, petróleo, tabaco o madera en ambientes de
                    poco oxígeno. Las chimeneas, las calderas, los calentadores de agua y los
                    aparatos domésticos que queman combustible, como las estufas, también
                    pueden producirlo si no están funcionando correctamente. Los vehículos
                    parados con el motor encendido también lo despiden.
                </p>
                <br>
                <p>El aire interior generalmente puede contener cierta concentración
                   de monóxido de carbono debido a que estos provienen de elementos que
                   se encuentran generalmente en las viviendas como: chimeneas, calderas,
                   calentadores de agua y los aparatos domésticos que queman combustible,
                   como las estufas (que pueden producirlo si no están funcionando
                   correctamente), con lo que se recomienda que se revise periódicamente
                   el estado de estas instalaciones.
                </p>
                <br>
                <p>El humo de tabaco ambiental en viviendas, oficinas, vehículos y
                   restaurantes puede elevar la concentración de monóxido de carbono
                   media de 8 horas a 23-46 mg/m3 (20-40 ppm), con lo que es aconsejable
                   no fumar en espacios interiores.
                </p>
                <br>
                <p>Las concentraciones de monóxido de carbono dentro de los
                   vehículos son generalmente más altas que aquellas medidas en el aire
                   exterior
                </p>
                <br>
                <p>Debido a que la ruta más probable de exposición al monóxido de
                carbono es respirar aire contaminado, se debe tratar de limitar las
                actividades al aire libre durante los períodos de mayor contaminación.
                </p>
                <!-- INICIO DIV DEL NO2 -->
        <h1>Efectos del NO2:</h1>
                        <br>
                        <p> Los efectos del NO2 en la salud humana se centran sobre todo en el
                            aparato respiratorio, habiéndose observado que cuando se supera una
                            concentración media de NO2 de 190 µg/Nm3 (0,1 ppm) en el 40% de los
                            días, aumenta la frecuencia de las infecciones de las vías respiratorias.

                        </p>
                        <br>
                        <p>Se ha comprobado que el NO2 provoca daños al parénquima
                           pulmonar, e incluso ante exposiciones crónicas a concentraciones bajas el
                           resultado es la aparición de cambios patológicos semejantes a los del
                           enfisema pulmonar. Adicionalmente, determina la inhibición de la
                           depuración mucociliar, la fagocitosis y la respuesta inmunológica en el
                           pulmón, produciendo una disminución de la resistencia del pulmón ante
                           las infecciones. Por último, incrementa la sensibilidad pulmonar a los
                           broncoconstrictores, afectando, por lo tanto, especialmente a las personas
                           asmáticas. Otros efectos son sensación de ahogo y dolor en el pecho.
                        </p>
                        <br>
                        <p>Los niveles bajos de óxidos de nitrógeno en el aire pueden irritar los
                           ojos, la nariz, la garganta, los pulmones, y posiblemente causar tos y una
                           sensación de falta de aliento, cansancio y náusea. La exposición a bajos
                           niveles también puede producir acumulación de líquido en los pulmones 1
                           ó 2 días después de la exposición. Respirar altos niveles de óxidos de
                           nitrógeno puede rápidamente producir quemaduras, espasmos y
                           dilatación de los tejidos en la garganta y las vías respiratorias superiores,
                           reduciendo la oxigenación de los tejidos del cuerpo, produciendo
                           acumulación de líquido en los pulmones y la muerte. El contacto con la
                           piel o los ojos puede producir quemaduras.

                        </p>
                        <br>
                        <p>Los asmáticos son especialmente sensibles a los efectos del NO2, se
                           ha encontrado que el 70% de los asmáticos responden a concentraciones
                           más bajas que las personas sanas (90-560 µg/m3 (0,05-0,3 ppm) frente
                           a mayor de 1880 µg/m3 (1 ppm) en personas sanas).
                        </p>
                        <br>
                        <p>Existen numerosos estudios realizados con personas que sufren
                           asma, enfermedades crónicas obstructoras del pulmón y bronquitis
                           crónicas que han demostrado efectos a bajas concentraciones de NO2.
                           Estos efectos son reducción del volumen forzado de expiración o
                           incrementos en la resistencia de las vías respiratorias. Se han encontrado
                           respuestas en la función pulmonar bajo exposiciones de 560 µg/m3 (0,3
                           ppm) en asmáticos realizando ejercicio moderado.
                        </p>
                        <br>
                        <p>Estudios realizados con niños, muestran la aparición de síntomas
                           leves respiratorios en concentraciones promedio de 14 µg/m3 (0,01
                           ppm).
                        </p>
                        <div class="tabla">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Concentración de dioxido de nitrogeno</th>
                                        <th>Efecto</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="berde">14 µg/m3 (0,01 ppm)</td>
                                        <td class="berde">Aparición de síntomas leves respiratorios en
                                            niños</td>
                                    </tr>
                                    <tr>
                                        <td class="berde">190 µg/m3 (0,1 ppm)</td>
                                        <td class="berde">Cuando se supera esta concentración media
                                            en el 40% de los días suele producirse un
                                            aumento de la frecuencia de infecciones en
                                            vías respiratorias</td>
                                    </tr>
                                    <tr>
                                        <td class="naranga">200 µg/m3 (0,11 ppm)</td>
                                        <td class="naranga">Tras la exposición durante una hora se informó
                                            un aumento de reactividad de la vía aérea en
                                            varios sujetos expuestos
                                        </td>
                                    </tr>

                                    <tr>
                                        <td class="naranga">210 µg/m3 (0,112
                                            ppm)</td>
                                        <td class="naranga">Umbral del olor
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="naranga">400 µg/m3 (0,2 ppm)</td>
                                        <td class="naranga">Tras la exposición durante dos horas se
                                            informó un aumento en la reactividad de la vía
                                            aérea en varios sujetos expuestos
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="naranga">470 µg/m3 (µg0,25
                                            ppm)
                                        </td>
                                        <td class="naranga">Se informó de un aumento en la reactividad
                                            de la vía aérea no específicos en asmáticos
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="naranga">560 µg/m3 (0,3 ppm)</td>
                                        <td class="naranga">Se ha observado respuestas en la función
                                            pulmonar bajo exposiciones a esta
                                            concentración en asmáticos realizando
                                            ejercicio moderado
                                         </td>
                                    </tr>
                                    <tr>
                                        <td class="naranga">600 µg/m3 (0,32 ppm)</td>
                                        <td class="naranga">Tras la exposición durante 30 minutos se
                                            informó de que potenciaba los
                                            broncoespasmos inducidos por el ejercicio y la
                                            reactividad de la vía aérea a la provocación de
                                            aire frío en asmáticos</td>
                                    </tr>
                                    <tr>
                                        <td class="naranga">900 µg/m3 (0,5 ppm)</td>
                                        <td class="naranga">Tras la exposición durante una hora se informó
                                            de un aumento en la reactividad de la vía
                                            aérea en sujetos normales
                                        </td>
                                    </tr>

                                    <tr>
                                        <td class="rogo">1.080 µg/m3 (1 ppm)</td>
                                        <td class="rogo">Se ha comprobado que se necesita superar
                                            esta concentración para producir daños en
                                            adultos sanos
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="rogo">18.800-37.600 µg/m3
                                            (10-20 ppm)
                                        </td>
                                        <td class="rogo">Ligeramente irritante
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="rogo">37.600 µg/m3 (20
                                            ppm)</td>
                                        <td class="rogo">IDLH (Inmediatamente peligroso para la vida
                                            y la salud; 30 minutos)
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="rogo">≥282.300 µg/m3 (≥150
                                            ppm)</td>
                                        <td class="rogo">Se ha informado de muerte por edema
                                            pulmonar
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="rogo">327.400 µg/m3 (174
                                            ppm)</td>
                                        <td class="rogo">Se ha pronosticado que debería producirse un
                                            50% de mortalidad durante una exposición de
                                            una hora
                                        </td>
                                        </tr>
                                </tbody>
                            </table>

                        </div>
                        <h2> Recomendaciones: </h2>
                            <p>Debido a que la ruta más probable de exposición al dióxido de
                               nitrógeno es respirar aire contaminado, se debe tratar de limitar las
                               actividades al aire libre durante los períodos de mayor contaminación.
                            </p>
                            <br>
                            <p>Las personas con dificultades respiratorias deben prestar una
                               atención especial a estas advertencias.
                            </p>
                            <br>
                            <p>En los episodios de alta contaminación por dióxido de nitrógeno, la
                               ventilación de las viviendas debe ser la mínima e igualmente los procesos
                               de combustión dentro de las viviendas.
                            </p>
                            <br>
                            <p>Las familias que usan cocinas o calentadores de gas, o que fuman
                               pueden limitar la exposición a los óxidos de nitrógeno permitiendo de vez
                               en cuando la circulación de aire fresco dentro de las viviendas.
                            </p>
                            <br>
                                        <!-- INICIO DIV DEL SO2 -->
        <h1>Efectos del SO2:</h1>
                        <br>
                        <p> Al respirar aire que contiene dióxido de azufre, éste pasa al interior
                            del cuerpo a través de la nariz y los pulmones. Llega fácil y rápidamente a
                            la corriente sanguínea a través de los pulmones. Una vez dentro del
                            cuerpo, se degrada a sulfato y es excretado en la orina

                        </p>
                        <br>
                        <p>Los estudios realizados en animales expuestos al dióxido de azufre
                           han descrito efectos respiratorios similares a los observados en seres
                           humanos. La exposición de cobayas a niveles bajos (2.600 μg/m3 -1
                           ppm-), alteró el ritmo respiratorio haciendo la respiración menos
                           profunda. La exposición a concentraciones más altas produce síntomas
                           más graves, tales como disminución de la frecuencia respiratoria,
                           inflamación o infección de las vías respiratorias y destrucción de áreas del
                           pulmón.
                        </p>
                        <br>
                        <p>Las personas asmáticas que hacen ejercicios físicos son susceptibles
                           a los efectos respiratorios de concentraciones relativamente bajas (650
                           μg/m3 -0.25 ppm-) de dióxido de azufre.

                        </p>
                        <br>
                        <p>La mayoría de los efectos de la exposición en adultos (por ejemplo,
                           dificultad para respirar, alteración del ritmo respiratorio, y ardor de la
                           nariz y la garganta) también es probable que se produzcan en niños, pero
                           se desconoce si los niños son más susceptibles que los adultos.
                        </p>
                        <br>
                        <p>Se sabe que las personas asmáticas que realizan ejercicio son
                           susceptibles a bajas concentraciones. Por lo tanto, se espera que los niños
                           asmáticos sean más susceptibles. Además, el asma aparece con mayor
                           frecuencia, en niños entre 8 y 11 años de edad, y en personas que viven
                           en áreas urbanas.

                        </p>
                        <br>
                        <p>Estudios de larga duración de grupos numerosos de niños han
                           sugerido posibles asociaciones entre la contaminación con dióxido de
                           azufre y síntomas respiratorios o dificultad para respirar. Los niños
                           expuestos a contaminación con dióxido de azufre pueden desarrollar más
                           problemas respiratorios a medida que crecen, pueden tener que visitar
                           con más frecuencia al servicio de urgencias a causa de episodios de
                           respiración jadeante, y pueden contraer más enfermedades respiratorias
                           que lo que es típico en niños de su edad.
                        </p>
                        <div class="tabla">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Concentración de dioxido de azufre</th>
                                        <th>Efecto</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="berde">520 μg/m3 (0,2 ppm)</td>
                                        <td class="berde">Los individuos normales y asmáticos (leves,
                                            moderados, graves) y atópicos más sensibles
                                            mostraron un aumento significativo de la
                                            resistencia específica de la vía aérea (sRaw),
                                            pero no clínicamente significativos debido a
                                            que no había síntomas respiratorios.</td>
                                    </tr>
                                    <tr>
                                        <td class="berde">1,7 μg/m3 (0.00053
                                            ppm)</td>
                                        <td class="berde">Concentración en aire asociadas con un
                                            aumento del riesgo para toda la vida por
                                            leucemia de 1/100.000</td>
                                    </tr>
                                    <tr>
                                        <td class="berde">655 μg/m3(0,25 ppm)</td>
                                        <td class="berde">Voluntarios con asma leve sometidos a
                                            ejercicio moderado y expuestos durante 75
                                            minutos no mostraron aumento considerable
                                            de la sRaw
                                        </td>
                                    </tr>

                                    <tr>
                                        <td class="berde">1.050 μg/m3(0,4 ppm)</td>
                                        <td class="berde">Individuos asmáticos de moderados a graves
                                            mostraron después de una exposición de 55
                                            minutos aumentos significativos de la sRaw y
                                            de los síntomas respiratorios
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="berde">1.300 μg/m3(0,5 ppm)</td>
                                        <td class="berde">Individuos asmáticos leves sometidos a
                                            ejercicio y expuestos durante 75 minutos
                                            mostraron aumento significativo de la sRaw.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="berde">1.570 μg/m3(0,6 ppm)
                                        </td>
                                        <td class="berde">Individuos asmáticos atópicos mostraron
                                            después de una exposición de 15 a 55 minutos
                                            aumentos significativos de la sRaw y de los
                                            síntomas respiratorios.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="berde">2.620 μg/m3(1 ppm)</td>
                                        <td class="berde">Individuos asmáticos leves sometidos a
                                            ejercicio y expuestos durante 75 minutos
                                            mostraron aumento significativo de la sRaw
                                         </td>
                                    </tr>
                                    <tr>
                                        <td class="berde">3.200 μg/m3 (1 ppm)</td>
                                        <td class="berde">Aparición de casos de leucemia en
                                            exposiciones de 40 años</td>
                                    </tr>
                                    <tr>
                                        <td class="berde">5.240 μg/m3(2 ppm)</td>
                                        <td class="berde">Individuos sanos sometidos durante 30
                                            minutos y realizando ejercicio continuo no
                                            mostraron cambios en pruebas de función
                                            pulmonar
                                        </td>
                                    </tr>

                                    <tr>
                                        <td class="naranga">7.900-13.000
                                            μg/m3(3-5 ppm)</td>
                                        <td class="naranga">Detección del olor
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="naranga">16.000-31.000
                                            μg/m3(6-12 ppm)
                                        </td>
                                        <td class="naranga">Puede causar irritación nasal y de la garganta.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="naranga">26.000 μg/m3(10 ppm)</td>
                                        <td class="naranga">Se puede observar irritación en las vías
                                            respiratorias superiores y posibles hemorragias
                                            nasales
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="naranga">52.000 μg/m3(20 ppm)</td>
                                        <td class="naranga">Puede causar irritación en los ojos
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="rogo">131.000-262.000
                                            μg/m3(50-100 ppm)</td>
                                        <td class="rogo">Se puede observar irritación grave de los ojos,
                                            garganta, tracto respiratorio inferior y
                                            lagrimeo, que pueden ser tolerados durante 30
                                            - 60 minutos.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="rogo">262.000 μg/m3(100
                                            ppm)</td>
                                        <td class="rogo">IDLH (Inmediatamente peligroso para la vida y
                                            la salud; 30 minutos)

                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="rogo">1.049.000 μg/m3(400
                                            ppm)</td>
                                        <td class="rogo">Concentración mínima letal en aire durante una
                                            exposición de 1 minuto.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                        <h2> Recomendaciones: </h2>
                            <p>Debido a que la ruta más probable de exposición al dióxido de
                               azufre es respirar aire contaminado, se debe tratar de limitar las
                               actividades al aire libre durante los períodos de mayor contaminación.
                               Aunque los niveles de dióxido de azufre en el aire son normalmente más
                               altos durante los meses de invierno, se ha demostrado que la exposición
                               de los seres humanos es más alta durante los meses de verano. Esto se
                               debe seguramente a que la gente disfruta de actividades al aire libre
                               durante los meses de verano y abre las ventanas para ventilar sus
                               hogares.

                            </p>
                            <br>
                            <p>Las personas con dificultades respiratorias deben prestar una
                               atención especial a estas advertencias. Además, las personas asmáticas
                               deben limitar el ejercicio al aire libre cuando los niveles de dióxido de
                               azufre en el aire sean altos.
                            </p>
                            <br>
                            <p>En los episodios de alta contaminación por dióxido de azufre, la
                               ventilación de las viviendas debe ser mínima.
                            </p>
                            <br>
                                        <!-- INICIO DIV DEL O3 -->
        <h1>Efectos del O3:</h1>
                        <br>
                        <p> Los efectos del ozono en la salud humana han sido estudiados
                            durante más de 30 años. El sistema respiratorio es el principal blanco de
                            este contaminante oxidante. Las respuestas del tracto respiratorio
                            inducidas por el ozono incluyen reducción en la función pulmonar,
                            empeoramiento de enfermedades respiratorias pre-existentes (como
                            asma), incremento en admisiones diarias al hospital y visitas al
                            departamento de emergencias por causas respiratorias y mortalidad
                            excesiva. El grado de empeoramiento de los efectos producidos por el
                            ozono depende de varios factores incluyendo la concentración y la
                            duración de la exposición, características del clima, sensibilidad individual,
                            enfermedades respiratorias pre-existentes y estatus socioeconómicos.


                        </p>
                        <br>
                        <p>La actividad física y la sensibilidad individual son factores para
                           determinar los efectos adversos del ozono en la salud. Cuatro grupos de
                           personas son particularmente sensibles al ozono cuando son activos al
                           aire libre: niños, adultos sanos haciendo ejercicios al aire libre, gente con
                           enfermedades respiratorias preexistentes y los ancianos. Los niños y
                           adultos sanos son más sensibles al ozono cuando realizan sus actividades
                           al aire libre porque la actividad física causa que las personas respiren más
                           rápido y más profundo, permitiendo una penetración más profunda del
                           ozono en los pulmones y produciendo lesiones. Además, los niños tienen
                           un alto riesgo de exposición al ozono porque pasan largos períodos de
                           tiempo al aire libre envueltos en actividades enérgicas.
                        </p>
                        <br>
                        <p>Otro factor que incrementa los efectos adversos del ozono es el
                           estatus socioeconómico. Es menos probable que gente de bajos ingresos
                           cuenten con unidades de aire acondicionado y por lo tanto es más
                           probable que mantengan las ventanas abiertas durante los meses de
                           verano cuando los niveles de ozono son más altos. Las diferencias entre
                           las áreas de residencias, también están relacionados a el estatus
                           socioeconómicos, pueden afectar las probabilidades de ser expuesto a
                           concentraciones de ciertos contaminantes en el aire, en sus niveles más
                           altos.

                        </p>
                        <br>
                        <p>El tiempo también juega un papel muy importante en la relación
                           entre la contaminación con ozono y la salud. Las condiciones
                           metereológicas influyen en los procesos químicos y físicos envueltos en la
                           formación de ozono. En un estudio realizado en Bélgica durante el verano,
                           se asumió que la temperatura ambiente combinada con altas
                           concentraciones de ozono fueron las causas en el importante exceso de
                           mortandad. En otro estudio en Nueva Jersey se observó una relación
                           marcada entre las concentraciones de ozono en el verano y las visitas al
                           departamento de emergencia a causas del asma.

                        </p>
                        <br>
                        <p>Dos de los factores más importantes son las concentraciones de
                           ozono y la exposición. Numerosos estudios epidemiológicos muestran la
                           relación entre efectos en la salud y niveles específicos de ozono. La EPA
                           ha obtenido información sobre los efectos en la salud a través de
                           investigaciones, estudios comparando estadísticas de salud y niveles de
                           ozono en las comunidades y estudios controlados de voluntarios humanos.

                        </p>
                        <br>

                        <div class="tabla">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Concentración de ozono</th>
                                        <th>Efecto</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="berde">0-125µg/m3</td>
                                        <td class="berde">Probablemente
                                            ninguno</td>
                                    </tr>
                                    <tr>
                                        <td class="berde">126-165µg/m3</td>
                                        <td class="berde">Usualmente los
                                            individuos sensibles
                                            pueden experimentar
                                            efectos respiratorios
                                            debido al prolongado
                                            esfuerzo al aire libre
                                            especialmente cuando
                                            es
                                            extraordinariamente
                                            sensible al ozono</td>
                                    </tr>
                                    <tr>
                                        <td class="berde">166-204µg/m3</td>
                                        <td class="berde">Miembros de grupos
                                            sensibles pueden
                                            experimentar síntomas
                                            respiratorios (tos,
                                            dolor al respirar
                                            profundamente)
                                        </td>
                                    </tr>

                                    <tr>
                                        <td class="naranga">205-243µg/m3</td>
                                        <td class="naranga">Miembros de grupos
                                            sensibles tienen más
                                            posibilidades de
                                            experimentar síntomas
                                            respiratorios (tos y
                                            dolor agravados),reducción de la
                                                             función de los
                                                             pulmones.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="naranga">244-793µg/m3</td>
                                        <td class="naranga">Miembros de grupos
                                            sensibles
                                            experimentan
                                            síntomas respiratorios
                                            severos y respiración
                                            débil.
                                        </td>
                                    </tr>

                                </tbody>
                            </table>

                        </div>



        <!--<a class="link-descarga" href="efectos_de_los_gases_para_la_salud.pdf" download="salud">Descargar PDF con toda la informacion</a> -->
        </div>

    </div>




    </div>


</body>
</html>