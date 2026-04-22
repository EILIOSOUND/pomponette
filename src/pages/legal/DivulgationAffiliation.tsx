export default function DivulgationAffiliation() {
  return (
    <main className="pt-20 bg-cream min-h-screen">
      <section className="bg-black py-16 px-6 text-center">
        <h1 className="font-playfair text-4xl font-semibold text-cream">Divulgation d&apos;affiliation</h1>
      </section>
      <section className="mx-auto max-w-3xl px-6 py-16 space-y-10 font-inter text-sm leading-relaxed text-dark-gray">
        <p className="text-dark-gray/60 text-xs">Dernière mise à jour : 21 avril 2026</p>

        <div className="rounded-xl border border-gold/30 bg-gold/5 p-6">
          <p className="font-inter text-sm font-medium text-black">
            <i className="ri-information-line mr-2 text-gold" />
            Pomponette participe au programme d&apos;affiliation de <strong>Espace Plaisir</strong>, via la plateforme <strong>Kwanko</strong>.
          </p>
        </div>

        <div>
          <h2 className="font-playfair text-2xl font-semibold text-black mb-3">Ce que cela signifie</h2>
          <p>
            Certains liens présents sur ce site sont des <strong>liens affiliés</strong>.<br />
            Cela signifie que si vous cliquez sur un lien et effectuez un achat sur le site partenaire, Pomponette peut percevoir une <strong>commission commerciale</strong>.
          </p>
        </div>

        <div>
          <h2 className="font-playfair text-2xl font-semibold text-black mb-3">Aucun coût supplémentaire pour vous</h2>
          <p>
            Cette commission est versée par le partenaire et n&apos;entraîne <strong>aucun coût supplémentaire</strong> pour vous.<br />
            Le prix que vous payez est identique, que vous passiez par notre lien ou directement sur le site du partenaire.
          </p>
        </div>

        <div>
          <h2 className="font-playfair text-2xl font-semibold text-black mb-3">Notre engagement éditorial</h2>
          <p>
            Les commissions perçues n&apos;influencent pas nos recommandations.<br />
            Nous sélectionnons uniquement des produits que nous estimons être de qualité, pertinents et adaptés à notre audience.
          </p>
        </div>

        <div>
          <h2 className="font-playfair text-2xl font-semibold text-black mb-3">Partenaires affiliés</h2>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>
              <strong>Espace Plaisir</strong> — via Kwanko{' '}
              <a href="https://www.espaceplaisir.fr/" rel="nofollow noopener" target="_blank" className="text-gold underline">
                www.espaceplaisir.fr
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-playfair text-2xl font-semibold text-black mb-3">Transparence</h2>
          <p>
            Dans un souci de transparence, nous vous informons clairement de l&apos;utilisation de liens affiliés sur ce site, conformément aux réglementations en vigueur.
          </p>
        </div>

        <div>
          <h2 className="font-playfair text-2xl font-semibold text-black mb-3">Contact</h2>
          <p>
            Pour toute question :{' '}
            <a href="mailto:shop.pomponette@gmail.com" className="text-gold underline">shop.pomponette@gmail.com</a>
          </p>
        </div>
      </section>
    </main>
  );
}
