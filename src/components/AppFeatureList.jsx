import React from 'react'
import AppFeatureListItem from './AppFeatureListItem'

function AppFeatureList() {
  return (
    <ul className="app-feature-container">
        <AppFeatureListItem picSrc="src\components\Icons\Card.svg" picAlt="Icon depicting credit card." headline="Easy payments" text="Id mollis consectetur congue egestas egestas suspendisse blandit justo."/>
        <AppFeatureListItem picSrc="src\components\Icons\Shield.svg" picAlt="Icon depicting a shield." headline="Data Security" text="Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non."/>
        <AppFeatureListItem picSrc="src\components\Icons\Diagram.svg" picAlt="Icon depicting a diagram." headline="Cost Statistics" text="Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh."/>
        <AppFeatureListItem picSrc="src\components\Icons\Question.svg" picAlt="Icon depicting speech balloons." headline="Support 24/7" text="A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris."/>
        <AppFeatureListItem picSrc="src\components\Icons\Wallet.svg" picAlt="Icon depicting wallet." headline="Regular Cashback" text="Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend."/>
        <AppFeatureListItem picSrc="src\components\Icons\Smiley.svg" picAlt="Icon depicting a smiley face." headline="Top Standards" text="Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu."/>
    </ul>
  )
}

export default AppFeatureList