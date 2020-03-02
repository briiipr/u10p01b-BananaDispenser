import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import './championCard.css';
import Axios from 'axios';

/**
 * Componente que crea el elemento ChampionCard.
 * @description Contiene la imagen del campeon, su lore, tips tanto de aliados como de enemigos y gráficas de cooldown y stats base.
 * @param{String} campeon Array con el nombre del campeón.
 * @param{String} img Array con la url completa de la imagen del campeon.
 * @return{Object} Retorna el componente carta de cada campeón.
 */
function ChampionCard(campeon, img) {
    const google = window.google
    google.charts.load('current', { 'packages': ['corechart'] });

    let idCard = `card${campeon.id}`;
    let idBoton = `botonCard${campeon.id}`;
    let idImg = `img${campeon.id}`
    let cardBodyId = `cardBody${campeon.id}`

    /**
     * Gestiona que se visualice o no la información del campeón.
     */
    function gestionaMostrar() {
        let botonCard = document.getElementById(`botonCard${campeon.id}`)
        if (botonCard.innerText === 'Saber menos') {
            botonCard.innerText = 'Saber más';
            eliminaInformacion()
            muestraHermanos()
        } else {
            ocultaHermanos()
            agregaInformacion()
            botonCard.innerText = 'Saber menos';
        }
    }

    /**
     * Añade la información una vez que se ejecuta gestionaMostrar para visualizar la información del campeón.
     */
    function agregaInformacion() {
        let card = document.getElementById(idCard);
        let botonCard = document.getElementById(idBoton);
        let imgCard = document.getElementById(idImg);
        let cardBody = document.getElementById(cardBodyId)
        card.style.width = '100%';
        card.style.setProperty('display', 'flex')
        card.style.setProperty('flex-direction', 'row')
        cardBody.style.setProperty('align-items', 'start')
        imgCard.style.width = '13rem';
        botonCard.width = 'max-content'
        botonCard.style.setProperty('align-self', 'center')

        Axios.get(`https://ddragon.leagueoflegends.com/cdn/10.4.1/data/es_ES/champion/${campeon.id}.json`).then(result => {
            console.log('EL valor de la api es: ')
            google.charts.load('current', { 'packages': ['corechart'] });

            let datosCampeon = result.data.data[campeon.id];
            
            // Contenedor de ayuda para insertar los datos antes del botón 'Saber menos'
            let cardInfoContainer = document.getElementById(`cardInfoContainer${campeon.id}`)


            // Contenedor de toda la información obtenida en la nueva llamada a la API
            let divInfoCampeon = document.createElement('div');
            divInfoCampeon.id = `infoCampeon${campeon.id}`;

            let divVideoCampeon = document.createElement('div');
            divVideoCampeon.style.width = '100%';
            divInfoCampeon.appendChild(divVideoCampeon);

            cardInfoContainer.appendChild(divInfoCampeon);

            Axios.get(`https://universe-meeps.leagueoflegends.com/v1/assets/videos/${campeon.id.toLowerCase()}-splashvideo.webm`).then(response => {
                console.log('Respuesta al buscar el video: ')
                let videoCampeon = document.createElement('video');
                videoCampeon.id = `video${campeon.id}`;
                videoCampeon.autoplay = true;
                videoCampeon.loop = true;
                videoCampeon.preload = true;
                videoCampeon.src = `https://universe-meeps.leagueoflegends.com/v1/assets/videos/${campeon.id.toLowerCase()}-splashvideo.webm`

                divVideoCampeon.appendChild(videoCampeon);
            }).catch(error => {
                console.log('Error al buscar el video: ')
                console.log(error.response.status)
                if(error.response.status === 404){
                    let pNoVideo = document.createElement('p')
                    pNoVideo.innerText = 'No posee vídeo.'

                    divVideoCampeon.appendChild(pNoVideo);
                }
            })

            // Se añaden las tags al div
            let pTags = document.createElement('p')
            pTags.id = `tags${campeon.id}`;
            let primerTag = true;
            let nombresTags = [];
            datosCampeon.tags.forEach(tag => {
                nombresTags.push(tag);
                if (primerTag === true) {
                    pTags.innerText += `${tag} `
                    primerTag = false;
                } else {
                    pTags.innerText += ` ${tag} `
                }
                pTags.innerText.trim()
            })

            divInfoCampeon.appendChild(pTags);

            nombresTags.forEach(tag => {
                let imgTag = document.createElement('img');
                imgTag.src = `./images/img/${tag.toLowerCase()}.png`;
                imgTag.id = `tagImg${campeon.id}${tag}`;

                divInfoCampeon.appendChild(imgTag)
            })


            // Se añade la historia del campeón
            let pLore = document.createElement('p');
            pLore.id = `lore${campeon.id}`;
            pLore.innerText = datosCampeon.lore;

            divInfoCampeon.appendChild(pLore);


            // Se crean los contenedores de los consejos tanto si es un aliado como si es un enemigo
            let divTipsContainer = document.createElement('div');
            divTipsContainer.id = `tipsContainer${campeon.id}`;

            divInfoCampeon.appendChild(divTipsContainer);

            let divAllyTips = document.createElement('div');
            divAllyTips.id = `allyTips${campeon.id}`;

            divTipsContainer.appendChild(divAllyTips);

            let divEnemyTips = document.createElement('div');
            divEnemyTips.id = `enemyTips${campeon.id}`;

            divTipsContainer.appendChild(divEnemyTips);


            // Se añade el contenedor de información sobre las habilidades (nombre, letra predeterminada, etc)
            let divInfoSkills = document.createElement('div');
            divInfoSkills.id = `infoSkills${campeon.id}`;

            divInfoCampeon.appendChild(divInfoSkills);

            let divGraphContainer = document.createElement('div');
            divGraphContainer.id = `graphContainer${campeon.id}`;

            divInfoCampeon.appendChild(divGraphContainer);

            let divGraphStats = document.createElement('div');
            divGraphStats.id = `graphStats${campeon.id}`;

            divGraphContainer.appendChild(divGraphStats);

            let divGraphCD = document.createElement('div');
            divGraphCD.id = `graphCd${campeon.id}`;

            divGraphContainer.appendChild(divGraphCD);

            let hAllyTips = document.createElement('h4');
            hAllyTips.innerText = 'Consejos si es tu aliad@';

            divAllyTips.appendChild(hAllyTips)

            let pAllyTips = document.createElement('p');
            pAllyTips.innerText = datosCampeon.allytips;

            divAllyTips.appendChild(pAllyTips);

            let hEnemyTips = document.createElement('h4');
            hEnemyTips.innerText = 'Consejos si es tu enemig@'

            divEnemyTips.appendChild(hEnemyTips);

            let pEnemyTips = document.createElement('p');
            pEnemyTips.innerText = datosCampeon.enemytips;

            divEnemyTips.appendChild(pEnemyTips);

            // Se recogen los datos de las habilidades, las estadísticas base y la pasiva
            let statsCampeon = datosCampeon.stats
            let spellsCampeon = datosCampeon.spells
            let arrayStats = [];
            arrayStats.push('Vida', 'Velocidad de movimiento', 'Armadura', 'Resistencia mágica', 'Rango de ataque', 'Daño de ataque');
            arrayStats.push('Vida inicial', statsCampeon.hp)
            google.charts.setOnLoadCallback(drawStatsChart(statsCampeon));
            google.charts.setOnLoadCallback(drawSkillsChart(spellsCampeon));

            // Se crean los contenedores que los encierran
            let passiveCampeon = document.createElement('div');
            passiveCampeon.id = `passiveDiv${campeon.id}`;
            divInfoSkills.appendChild(passiveCampeon);

            // Se crea la imagen de la pasiva
            let imgPassive = document.createElement('img');
            imgPassive.setAttribute('src',`https://ddragon.leagueoflegends.com/cdn/10.4.1/img/passive/${datosCampeon.passive.image.full}`)
            imgPassive.id = `imgPassive${campeon.id}`;
            passiveCampeon.appendChild(imgPassive);

            // Se crea la descripción de la pasiva
            let passiveDescription = document.createElement('p')
            passiveDescription.innerText = `${datosCampeon.passive.name} (Pasiva) - ${datosCampeon.passive.description}`
            passiveDescription.style.margin = '0.5em';
            passiveDescription.style.width = '90%';
            passiveCampeon.appendChild(passiveDescription);

            // Se crea el contenedor con cada una de las habilidades y sus descripciones
            spellsCampeon.forEach(spell => {
                let divSpell = document.createElement('div')
                divSpell.style.width = '100%';
                divSpell.id = `divSpell${campeon.id}`;
                divInfoSkills.appendChild(divSpell)

                let imgSpell = document.createElement('img');
                imgSpell.setAttribute('src', `http://ddragon.leagueoflegends.com/cdn/10.4.1/img/spell/${spell.id}.png`)
                imgSpell.id = `imgSpell${spell.id}`;
                divSpell.appendChild(imgSpell);

                let pDescripcion = document.createElement('p');
                pDescripcion.innerText = `${spell.name} - ${spell.description}.`;
                pDescripcion.style.width = '90%';
                pDescripcion.style.margin = '0.5em';

                divSpell.appendChild(pDescripcion)
            })
        })


        /**
         * Chart de cooldown de habilidades.
         * @description Crea el chart de los rangos de enfriamiento de las habilidades con la Api de GoogleCharts.
         * @param {JSon} skills Json que contiene los valores del cooldown de las habilidades.
         */
        function drawSkillsChart(skills) {
            console.log('Nombre de habilidad: ' + skills[0].name)
            var data = google.visualization.arrayToDataTable([
                ['Mana', ' Rango 1', ' Rango 2', ' Rango 3', ' Rango 4', ' Rango 5'],
                [` ${skills[0].name} - Q `, skills[0].cooldown[0], skills[0].cooldown[1], skills[0].cooldown[2], skills[0].cooldown[3], skills[0].cooldown[4]],
                [` ${skills[1].name} - W `, skills[1].cooldown[0], skills[1].cooldown[1], skills[1].cooldown[2], skills[1].cooldown[3], skills[1].cooldown[4]],
                [` ${skills[2].name} - E `, skills[2].cooldown[0], skills[2].cooldown[1], skills[2].cooldown[2], skills[2].cooldown[3], skills[2].cooldown[4]],
                [` ${skills[3].name} - R `, skills[3].cooldown[0], skills[3].cooldown[1], skills[3].cooldown[2], skills[3].cooldown[3], 0]
            ]);

            let view = new google.visualization.DataView(data);
            view.setColumns([0, 1,
                {
                    calc: "stringify",
                    sourceColumn: 1,
                    type: "string",
                    role: "annotation"
                },
                2]);

            let options = {
                title: 'Enfriamiento de Habilidades por Rango',
                width: 600,
                height: 300,
                chartArea: { width: '50%', height: '90%' },
                colors: ['#b0120a', '#ffab91', '#7BFF19', '#097FF0', '#F009D0'],
                hAxis: {
                    title: 'Enfriamiento',
                    minValue: 0
                },
                vAxis: {
                    title: 'Habilidades'
                }
            };

            let chart = new google.visualization.BarChart(document.getElementById(`graphCd${campeon.id}`));
            chart.draw(data, options);
        }

        /**
         * Chart de estadísticas base.
         * @description Crea el chart de las estadísticas base con la Api de GoogleCharts.
         * @param {JSon} skills Json que contiene los valores del cooldown de las habilidades.
         */
        function drawStatsChart(stats) {
            let data = google.visualization.arrayToDataTable([
                ["Estadísticas", "Valor", { role: "style" }],
                ["Vida", stats.hp, "#13D100"],
                ["Armadura", stats.armor, "#9D9D9D"],
                ["Resistencia Mágica", stats.spellblock, "#9849F1"],
                ["Daño de Ataque", stats.attackdamage, "#FA2222"],
                ["Rango de Ataque", stats.attackrange, "#FAA715"],
                ["Velocidad de Movimiento", stats.movespeed, "#159CFA"]
            ]);

            let view = new google.visualization.DataView(data);
            view.setColumns([0, 1,
                {
                    calc: "stringify",
                    sourceColumn: 1,
                    type: "string",
                    role: "annotation"
                },
                2]);

            let options = {
                title: 'Estadísticas del personaje',
                height: 430,
                bar: { groupWidth: "95%" },
                legend: { position: "none" },
            };

            let chart = new google.visualization.ColumnChart(document.getElementById(`graphStats${campeon.id}`));
            chart.draw(data, options);
        }
    }
    
    /**
     * Oculta la información de cada campeon.
     */
    function eliminaInformacion() {
        let card = document.getElementById(idCard);
        let cardInfoContainer = document.getElementById(`cardInfoContainer${campeon.id}`);
        let botonCard = document.getElementById(idBoton);
        let imgCard = document.getElementById(idImg);
        let cardBody = document.getElementById(cardBodyId);
        card.style.setProperty('width','13rem');
        card.style.setProperty('display', 'flex');
        card.style.setProperty('flex-direction', 'column');
        cardBody.style.setProperty('justify-content', 'center');
        cardBody.style.removeProperty('align-items');
        imgCard.style.width = 'inherit';
        botonCard.width = 'max-content';
        botonCard.style.removeProperty('align-self');
        
        borraHijos(cardInfoContainer);
    }

    /**
     * Oculta los hermanos del elemento carta. Se acciona al pulsar "Saber más"
     */
    function ocultaHermanos() {
        let card = document.getElementById(idCard);
        let hermanoSiguienteCard = card.nextElementSibling;
        let hermanoPrevioCard = card.previousElementSibling;
        while (hermanoSiguienteCard) {
            hermanoSiguienteCard.style.display = 'none';
            hermanoSiguienteCard = hermanoSiguienteCard.nextElementSibling;
        }
        while (hermanoPrevioCard) {
            hermanoPrevioCard.style.display = 'none';
            hermanoPrevioCard = hermanoPrevioCard.previousElementSibling;
        }
    }

    /**
     * Muestra los hermanos del elemento carta. Se acciona al pulsar "Saber menos"
     */
    function muestraHermanos() {
        let card = document.getElementById(idCard);
        let hermanoSiguienteCard = card.nextElementSibling;
        let hermanoPrevioCard = card.previousElementSibling;
        while (hermanoSiguienteCard) {
            hermanoSiguienteCard.style.display = 'initial';
            hermanoSiguienteCard = hermanoSiguienteCard.nextElementSibling;
        }
        while (hermanoPrevioCard) {
            hermanoPrevioCard.style.display = 'initial';
            hermanoPrevioCard = hermanoPrevioCard.previousElementSibling;
        }
    }

    function borraHijos(elemento){
        while(elemento.lastElementChild){
            elemento.removeChild(elemento.lastElementChild);
        }
    }

    return (
        <Card text="white" className="text-center" id={idCard}>
            <Card.Img variant="top" src={img} id={idImg} />
            <Card.Body id={cardBodyId}>
                <Card.Title>{campeon.id}</Card.Title>
                <div id={`cardInfoContainer${campeon.id}`}></div>
                <button id={idBoton} onClick={() => gestionaMostrar()}>Saber más</button>
            </Card.Body>
        </Card>
    );
}
export default ChampionCard;