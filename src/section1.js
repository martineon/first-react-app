import React, { Component } from 'react';
import './section1.css';
import SinformerBG from './sinformerBg.jpg'

class section1 extends Component {
  render() {
    return (
      <div className="section1">
        <div className="sinformer">
          <img src={SinformerBG} className="sinformerBg"/>
          <div className="reseaux">
            <h3 className="sinformerTitre">S'INFORMER, C'EST DÉJÀ AGIR</h3>
            <div className="iconReseaux">
              <a className="facebook" href="#">facebook</a>
              <a className="tweeter" href="#">tweeter</a>
              <a className="pinterest" href="#">pin it</a>
              <a className="tumblr" href="#">tumblr</a>
            </div>
          </div>
        </div>
        <div className="moratoire">
          <div className="moratoireContent">
            <div className="moratoireTitre">
              <h2>1982</h2>
              <h3>LES BALEINES ONT LEUR MORATOIRE</h3>
            </div>
            <div className="introContainer">
              <p className="introContent"> Malgré un moratoire et une interdiction du commerce international des produits baleiniers, plus de 1.000 baleines sont tuées chaque année à des fins commerciales.</p>
            </div>

            <div className="mainTextContainer">
              <p className="mainTextContent">Au cours de l'année 1961, date de création du WWF International, plus de 66.000 baleines ont été tuées. Pour faire face à cette extinction organisée, le WWF appelle à la création de sanctuaires baleiniers et d'un moratoire sur la chasse baleinière commerciale. Il faudra attendre 1979 pour obtenir une première victoire: la création du premier sanctuaire baleinier qui couvre tout l'Océan Indien, ainsi qu'un moratoire - une suspension - sur l'utilisation des navires usines pour la chasse. La victoire la plus importante sera obtenue en 1986, avec la mise en oeuvre effective d'un moratoire suspendant toute chasse commerciale. Malgré cette mesure, trois pays poursuivent la chasse pour motif scientifique ou commercial, il s'agit de la Norvège, du Japon et de l'Islande. Depuis, le WWF fait pression pour que le moratoire soit appliqué  </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default section1;
