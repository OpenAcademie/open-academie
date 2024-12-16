import React from 'react'
import Layout from '../components/layout'
import Brief from '../components/brief'
import ProductHead from '../components/product-head'
import Download from '../components/download'
import SalesPoints from '../components/sales-points'
import Corporate from '../components/corporate'
import HowToSteps from '../components/how-to-steps'
import ExternalLinks from '../components/external-links'
import Iframe from '../components/iframe'
import { Products } from '../components/constants'
import { Colors } from '../components/constants'

const constant = Products.find(product => product.id === 'essatedesco')

const essatedesco = () => (
  <Layout title={constant.title}>
    <main>
      <ProductHead constant={constant} />

      <div className="wrapper">
        <Brief
          description={constant.description}
          downloadComponent={<Download constant={constant} />} />


        <SalesPoints points={constant.salesPoints} />

        <style jsx>{`
          .wrapper {
            display: flex;
            flex-wrap: wrap;
          }
        `}</style>
      </div>

 
      <HowToSteps
        steps={[
          'Télécharger',
          'Paramétrer l\'agence comptable et l\'établissement',
          'Importer ou saisir des créances contentieuses',
          'Associer une créance avec un tiers susceptible de détenir de quoi la combler',
          'Editer tous les documents utiles au recouvrement forcé dont la SATD'
        ]}
      />

      <ExternalLinks constant={constant} />

      <Corporate
        simple="Partir du besoin (la créance) et obtenir immédiatement tous les documentsnécessaires à un recouvrement forcé, sans risque d'errements de procédure."
        gratuit="Elaboré par des agents du service public pour eux-mêmes et leurs collègues, EssatédéSCO est libre et gratuit. Cette liberté est protégée par la licence publique de l'Union européenne EUPL 1.2"
/>
    </main>
  </Layout>
)

export default essatedesco
