import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'

const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>
const h = '80%';

const tip = (props) => {
    
    const titulos = [
        '¿ Qué cosas necesito para mi nuevo integrante?',
        'Tiempo Libre',
        'Un entorno seguro',
        'No forzar el acercamiento',
        'Confianza',
        'Minimizar situaciones tensas',
        'Tener una rutina',
        'Paciencia',
        'Otro perro en casa',
        'Primera noche'
    ]

    const texto = [
`   
1. Lo primero de todo será su cama, ya que al pasar tiempo en una jaula agradecerá un lugar cómodo donde reposar. Es preferible que sea algo grande a demasiado pequeño.

2. Lo segundo será situar en un lugar concreto un bebedero con abundante agua fresca. También necesitaremos comida específica para su edad (junior, adulto senior) y si
quieres hacerle la llegada más amena, algo de paté o comida enlatada, ¡les encanta!

3. Los premios serán imprescindibles para trabajar con él adiestramiento y el refuerzo positivo, cuanto más sabrosas sean, mejor.

4. Algún juguete o mordedor será también imprescindible ya que algunos perros pueden sufrir ansiedad y van a tener la necesidad de mordisquear.

5. Un collar o arnés, una correa y bolsas para recoger los excrementos serán fundamentales para sacar a pasear a tu nuevo amigo.
Recuerda que los refugios suelen tener dificultades económicas así que llévalo todo contigo en el momento de adoptar al perro, para que puedan utilizar
el collar que tienen para un nuevo inquilino.

6. También puede ocurrir que tu amigo llegue excesivamente sucio. Ten listo un champú, una pipeta y un cepillo para el baño si fuera necesario. 
También puedes llevarle a una peluquería canina y observar cómo lo hacen si no tienes experiencia.
`
,        
`
si tienes pensado adoptar un perro, es recomendable que lo hagas en un momento donde dispongas tiempo libre para dedicárselo,  ya que es mejor no dejarlo solo en un entorno desconocido desde el primer día que llega a su primer hogar.  Lo ideal es reservar un periodo vacacional para ello.
Cada perro tiene sus propios gustos y “manías”, aunque hayamos tenido otros perritos anteriormente es aconsejable tomar el tiempo en observar y aprender de nuestro nuevo compañero: qué cosas le gustan, cuáles le ponen nervioso, qué juguetes le divierten más, dónde prefiere que le rasquen y dónde le incomoda, etc. Sus señales comunicativas son amplias y variadas, es cuestión de prestar atención.  Cuando el animal pida cariño podemos dárselo, pero en caso contrario tenemos que darle tiempo y no agobiarlo.
Los paseos han de ser relajados para esto es necesario mucho tiempo; que olisquee y explore su nuevo entorno con tranquilidad a su ritmo, y no debemos forzarle a acercarse a cosas que le atemorizan, puede que no haya visto nunca antes un autobús o un niño en bicicleta y habrá que darle tiempo y ayudarle a acostumbrarse de forma gradual a los estímulos nuevos.
`
,
`
Deja que sea él quién elija dónde descansar y procura no invadir ese espacio personal. Con el tiempo el definiría su espacio para dormir y entenderá que ese es su hogar.
Tampoco es bueno que vengan muchas visitas, o llevarlo de casa en casa para presentarlo a nuestros amigos y familia, ya habrá tiempo para las presentaciones en el futuro.
`
,
`
No te esfuerces en ser su amigo, aun es muy pronto, ¡Esfuérzate en que no tenga miedo!.
No lo abraces, no lo corrijas con brusquedad, ni lo castigues, no es el momento de educarlo ni exigirle en los primeros días. También debes tener en cuenta que un cachorro es diferente a un adulto y que cada uno ha tenido diferentes experiencias.

`
,
`
Ganarse su confianza es la clave del éxito.Trata de evitar los sobresaltos. En casa nos moveremos con naturalidad, evitaremos movimientos bruscos y rápidos que le puedan alertar o generar inseguridad.
Intenta ofrecerle golosinas y jugar con él para ganarse su confianza y distraerlo. El uso de juguetes y tu atención son fundamentales.  Debes prepararte para realizar actividades con él, los juegos de inteligencia o los juguetes interactivos pueden ayudarte mucho a la hora de crear un ambiente amigable y divertido. Hacerle feliz será fundamental para disfrutar de un perro sano y afectuoso.
`
,
`
Evita dejar a su alcance objetos de valor o delicados. Así tu no te disgustarás si sucede algún “accidente”, y tu perro no recibirá ninguna reprimenda que le genere estrés y haga que se retraiga o se sienta amenazado.
Puede ocurrir que intente marcar su territorio orinando un poco en algunos rincones. Es normal que lo haga especialmente si has tenido a otros perros antes, no te agobies, pronto dejará de hacerlo. Recuerda que no es en absoluto aconsejable regañar a un perro recién adoptado, opta por distraerlo para que deje de hacerlo.
`
,
`
Comida, agua, su lugar dónde dormir, horarios fijos… todo esto afianzará su seguridad poco a poco. Y a medida que veamos cómo responde probamos, siempre sin forzar, con situaciones nuevas como ir a un parque con más perros, pasear por lugares concurridos, etc. Aunque esto te parezca poco relevante, lo cierto es que es una de las formas más efectivas de acostumbrar al perro a un nuevo hogar.
Será básico y fundamental fijar unas normas de convivencia entre toda la unidad familiar. No podemos prohibirle una cosa y luego permitírsela, eso podría confundir mucho al animal. Eso sí, intenta ser lo más tolerante posible al principio, recuerda que puede estar desorientado y asustado o que sus anteriores propietarios fueran caóticos o no fijarán normas de convivencia.
`
,
`
Los cambios generan estrés en todos, y no todos los humanos/animales lo gestionamos del mismo modo. Por lo tanto, no veremos al verdadero perro hasta que vayan pasando algunas semanas y vaya relajándose y familiarizándose con su nuevo entorno.
Así mismo, él debe conocernos y debemos esforzarnos en transmitirle seguridad y confianza, para que vea por sí mismo que estar a nuestro lado es agradable y decida quedarse cerca nuestro por voluntad propia. Es muy importante no soltar nunca a nuestro perro en un lugar abierto hasta que no estemos plenamente seguros de que acudirá a nuestra llamada, sería muy peligroso para él si saliera corriendo sin control detras de otro perro o asustado por algún ruido.
`
,
`
Lo mejor es que se conozcan fuera de casa, siempre en lugares abiertos y por precaución mejor atados, sin tensión en las correas. Debemos dejar que se vean y se huelan antes de encontrarse en su nuevo hogar. En casa evita objetos por los que puedan discutir: juguetes, comida, etc. No fuerces situaciones, no hay prisa, mejor poco a poco. Tienen toda la vida para ser parceritos. 
Es muy recomendable contar con la ayuda y consejos de un buen educador canino que pueda valorar la situación de forma correcta, y en caso de haber problemas que requieran modificación de conducta poderlos solucionar de la forma más adecuada al animal antes de que empeoren.
`
,
`
1. Comenzaremos colocando su camita en un rinconcito sin mucho alboroto. Si puedes conseguir un trapo o una mantita que sea un olor conocido en un ambiente totalmente nuevo puede ayudarle a disminuir el estrés.

2. Déjale a disposición algunos juguetes, un cachorro siempre tiene ganas de jugar. De este modo si se despierta hay menos probabilidades de que te busque para jugar y se dedique en cuerpo y alma al peluche que previamente le dejaste.

3. Déjale a disposición algunos juguetes, un cachorro siempre tiene ganas de jugar. De este modo si se despierta hay menos probabilidades de que te busque para jugar y se dedique en cuerpo y alma al peluche que previamente le dejaste.

4. Cuando hayas hecho todos estos preparativos te puedes ir a la cama, pero cuidado: aquí empieza la parte más difícil. Cuando estés en la cama y el perro comience a llorar tendrás que ser "fuerte" e ignorarlo o aprenderá a llorar para llamar tu atención. No te preocupes: pronto se cansará y conseguirás descansar. Las siguientes noches serán mucho más tranquilas.
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
export default tip;
