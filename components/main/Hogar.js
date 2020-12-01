import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'

const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>
const h = '80%';


const hogar = (props) => {
    
    const titulos = [
        'Fundación Animal Love',
        'Fundación Amigos del Planeta',
        'Fundación MIA',
        'Fundación TEPA',
        'Huellas',
        'Huellitas sin Hogar',
        'Fundación Hogar de Paso Perro Amor',
        ' Fundación Voz Animal',
        'AdopcionesBogota'
    ]

    const texto = [
`   
somos una fundación de carácter privado y legalmente constituida desde el año 2012. Actualmente nos encontramos ubicados en Tabio, Vereda Rio Frio Occidental, en un terreno rentado de 4.500 metros cuadrados que hemos adecuado para albergar hasta 320 peluditos, entre perros y gatos. Este proyecto de vida arrancó como una iniciativa familiar desde hace más de 10 años, rescatando peluditos en mal estado y llevándolos a nuestra casa para recuperarlos y luego buscarles hogar. Pasado un tiempo empezó a crecer el número de animales albergados y decidimos buscar un sitio para seguirlos recuperando. Por eso rentamos una casa en Suba y decidimos dedicarnos 100% a esta labor. Con el tiempo nos dimos cuenta de que el trabajo con los peludos no podría lograrse sin la ayuda de otras personas, así que amigos y conocidos empezaron a sumarse a la causa con alimentos y medicamentos. Con los años el crecimiento de casos fue tan grande que nuevamente como familia emprendimos un proyecto más sólido y nos ubicamos en el lote donde actualmente funcionamos en Tabio. Aparte de los perritos de la Fundación, albergamos en nuestra casa varios peludos rescatados de la calle que hoy son parte de nuestra familia

`
,        
`
Somos una fundación protectora de animales, activa desde el año 2000, prestamos servicios de protección animal en Bogotá y sus alrededores, realizamos jornadas de adopción para las mascotas que rescatamos y ayudamos a compartir información de mascotas perdidas y encontradas. La fundación fue creada como una plataforma de trabajo que estimula la relación armónica entre el hombre y su planeta. Nos esforzamos cada día por hacer del mundo un lugar mejor, donde humanos y animales podamos vivir en armonía. Trabajamos para conseguir un mundo en equilibrio donde se respeten y garanticen los derechos de los animales, promovemos acciones formativas que inciden en el fomento de la empatía y el respeto por los animales.

`
,
`
es una organización sin ánimo de lucro que busca dar un hogar amoroso, rehabilitar y dar en adopción a perros que son rescatados en estado de indefensión y maltrato. La Fundación MIA busca ser un canal que permita educar en la tenencia responsable y amorosa de los perros, así como en el reconocimiento de que son seres que sufren ante el abandono y el maltrato. Nuestro sueño es que cada vez sean menos los canes que están desprotegidos y que la adopción sea el primer camino seleccionado cuando se tome la decisión de compartir la vida con un perro, sin importar su raza ni condición.

`
,
`
hemos cambiado su mundo y ellos el nuestro. Muchos han sido felizmente adoptados, otros nos han enseñado a no darnos por vencidos y son ejemplo de perseverancia y gratitud. Algunos ya no nos acompañan, pero nos queda la sensación de haberles permitido conocer la bondad humana. Y están los que habitan el refugio y que siguen esperando una oportunidad para tener una familia y llenar sus hogares de alegría y amor. Puede que no salvemos millones de animales de la calle que existen, pero ayudaremos a los que estén a nuestro alcance, a los que el universo nos coloque en el camino.

`
,
`
La Fundación HUELLAS PERROS AL SERVICIO, nace en el 2007 con el rescate de Lucas, un poodle encontrado en el Parque Principal del barrio Modelia, en la ciudad de Bogotá. Este perrito llegó a la Fundación en muy malas condiciones de salud, presentaba síntomas de maltrato, cortes en la piel y con un claro temor hacia las personas y animales.
Actualmente, estamos ubicados en Tabio, Vereda de Río Frío, y gracias al trabajo constante y la ayuda de muchas personas tenemos instalaciones adecuadas para 120 perros, y seguimos trabajando bajo la misma filosofía. En este momento, se tiene establecida una capacidad de hasta 50 perros rescatados en la Fundación, y se trabaja todos los días en rehabilitar física y mentalmente a nuestros perros para que puedan ingresar a nuestro programa de adopción y ser felices el resto de su vida.
`
,
`
Huellitas sin hogar es el esfuerzo de un grupo de amigos por ayudar a los miles de animales que se encuentran desprotegidos y en las calles colombianas. Uno de los principales objetivos es por medio de la pagina promover la adopción y apadrinamiento de mascotas en las fundaciones que se dedican al cuidado de estos animales. No contamos con sede física ya que solo somos un medio de conexión entre las personas que buscan una mascota y los hogares de paso. Además de esto no recibimos , ni pedimos ningún tipo de ayuda económica, ya que es ayudar a los animales lo que nos mueve. Esta es la primera versión de la página y esperamos poder seguir evolucionando para mejorar en algo esta problemática tan grande de nuestro país.
`
,
`
La Fundación Hogar de Paso Perro Amor es un refugio para perros acreditado, registrado por el gobierno y sin fines de lucro con 3 sedes a las afueras de Bogotá en Cota, Cundinamarca. Existimos para rehabilitar, albergar y encontrar un hogar definitivo para perros menos favorecidos donde los cuiden con mucho amor y responsabilidad. Todos nuestros 300 perros en el refugio tienen una historia. Ya sean viejos, ciegos, maltratados, abandonados, lisiados o de la calle, les damos a todos nuestros perros un lugar donde pueden ser felices, bien tratados, alimentados y albergados. Con más de 15 años de existencia, hemos encontrado familias para cientos de perros para que puedan tener largas vidas llenas de amor. ¡Únete a nuestra misión y 'Adopta No Compres'!
`
,
`
La Fundación Voz Animal abrió sus puertas el 8 de Noviembre del 2008. Somos una organización sin ánimo de lucro, que busca reducir la presencia de animales desprotegidos en la ciudad, a través de campañas estructuradas de esterilización y concienciación de los habitantes de la zona. Protegemos animales en difíciles condiciones y les damos resguardo, alimentación y afecto, mientras les conseguimos un hogar digno para vivir. El objeto social de la Fundación es  desarrollar campañas masivas de esterilización a bajos costos, dirigidas a caninos y felinos  de bajos estratos, con el fin de disminuir la superpoblación animal, el maltrato, el abandono y el abuso contra los animales. También, en nuestras instalaciones albergamos alrededor de 150 peludos de todas edades que están listos para encontrar un hogar en adopción. Otro grupo de peludos viven en la Fundación en función del Santuario de la Fundación que está destinados para peludos que por edad o salud viven por el resto de sus vidas en la Fundación Voz Animal
`
,
`
En AdopcionesBogota.com tenemos como objetivo UNIFICAR la información de los perros y gatos disponibles para dar en adopción en la ciudad de Bogotá, Colombia.
`

    ]
   
    return ( 
        <View style ={styles.text}>
            <Text style ={styles.textTitle}>
            <B>{titulos[props.route.params.keyTip]}</B>
            </Text>
            <Text  style ={styles.textContent}>
          {texto[props.route.params.keyTip]}
                 </Text>
        </View>
        
    );
}

const styles = StyleSheet.create({
    text:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2e3192ff'
    },
    textContent:{
        flexShrink: 1,
        backgroundColor: '#2e3192ff',
        color: '#ffff',
        padding: 20,
        height: h
    },
    textTitle:{
        flexShrink: 1,
        backgroundColor: '#2e3192ff',
        color: '#ffff',
        padding: 10,
        fontSize: 18,
    }
})
export default hogar;