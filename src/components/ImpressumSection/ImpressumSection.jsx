import ImpressumCard from "../ImpressumCard/ImpressumCard";
import ImpressumSecondaryCard from "../ImpressumSecondaryCard/ImpressumSecondaryCard";

const ImpressumSection = () => {
  return (
    <section className="w-11/12 min-[450px]:w-5/6 mx-auto flex flex-col">
      <p className="text-black  text-5xl font-semibold mt-20">Impressum</p>
      <div className="flex flex-col items-start gap-y-12 mt-16">
        <ImpressumCard
          title="WEDO"
          text1="Wenske, Sebastian & Cetin, Baris GbR"
          text2="Ohlauer Straße 2"
          text3="10999 Berlin"
        />
        <ImpressumCard
          title="Kontakt"
          text1="Tel: 030 - 469 990 798"
          text2="E-Mail: info@space-rocket.de"
          text3="www.space-rocket.de"
        />
        <ImpressumCard
          title="Standort Tiergarten"
          text1="Space Rocket"
          text2="Waldstraße 25"
          text3="10551 Berlin"
        />
        <ImpressumCard
          title="Vertretungsberechtigte Gesellschafter"
          text1="Sebastian Wenske"
          text2="Baris Cetin"
        />
        <ImpressumCard
          title="Bankverbindung"
          text1="Commerzbank"
          text2="IBAN: DE96 1004 0000 0672 4405 00"
          text3="BIC: COBADEFFXXX"
          text4="USt-ID: DE322172389"
        />
      </div>
      <div className="flex flex-col items-start gap-y-12 my-16">
        <ImpressumSecondaryCard
          title="Urheberrecht"
          text1="Falls nicht anders angegeben, unterliegen alle Seiten dieses
        Webangebotes dem Urheberrecht (Copyright). Dies gilt insbesondere für
        Texte, Bilder, Grafiken und Style-Dateien, einschließlich deren
        Anordnung auf den Websites."
          text2="Eine Vervielfältigung oder Verwendung von Websites (oder von
        Teilen daraus) in anderen elektronischen oder gedruckten Publikationen
        und deren Veröffentlichung (auch im Internet) ist nur nach vorheriger
        Genehmigung gestattet."
          text3="Weiterhin können Bilder, Grafiken, Text- oder sonstige Dateien
        ganz oder teilweise dem Urheberrecht Dritter unterliegen. Alle innerhalb
        des Internetangebotes genannten und ggf. durch Dritte geschützten
        Marken- und Warenzeichen unterliegen uneingeschränkt den Bestimmungen
        des jeweils gültigen Kennzeichenrechts und den Besitzrechten der
        jeweiligen eingetragenen Eigentümer. Allein aufgrund der bloßen Nennung
        in unserem Internetangebot ist nicht der Schluss zu ziehen, dass
        Markenzeichen nicht durch Rechte Dritter geschützt sind."
        />
        <ImpressumSecondaryCard
          title="Haftungsausschluss"
          text1="Der Autor hat alle in seinem Bereich bereitgestellten Informationen nach bestem Wissen und Gewissen erarbeitet und geprüft. Jedoch übernimmt der Autor keinerlei Gewähr für die Aktualität, Korrektheit, Vollständigkeit oder Qualität der bereitgestellten Informationen. Haftungsansprüche gegen den Autor, welche sich auf Schäden materieller oder ideeller Art beziehen, die durch die Nutzung oder Nichtnutzung der dargebotenen Informationen bzw. durch die Nutzung fehlerhafter und unvollständiger Informationen verursacht wurden, sind grundsätzlich ausgeschlossen, sofern seitens des Autors kein nachweislich vorsätzliches oder grob fahrlässiges Verschulden vorliegt."
          text2="Alle Angebote sind freibleibend und unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen."
        />
        <ImpressumSecondaryCard
          title="Verweise und Links (Disclaimer)"
          text1="Bei direkten oder indirekten Verweisen auf fremde Websites ('Hyperlinks'), die außerhalb des Verantwortungsbereiches des Autors liegen, würde eine Haftungsverpflichtung ausschließlich in dem Fall in Kraft treten, in dem der Autor von den Inhalten Kenntnis hat und es ihm technisch möglich und zumutbar wäre, die Nutzung im Falle rechtswidriger Inhalte zu verhindern."
          text2="Der Autor erklärt hiermit ausdrücklich, dass zum Zeitpunkt der Linksetzung keine illegalen Inhalte auf den zu verlinkenden Seiten erkennbar waren. Auf die aktuelle und zukünftige Gestaltung, die Inhalte oder die Urheberschaft der gelinkten/verknüpften Seiten hat der Autor keinerlei Einfluss. Deshalb distanziert er sich hiermit ausdrücklich von allen Inhalten aller gelinkten/verknüpften Seiten, die nach der Linksetzung verändert wurden. Diese Feststellung gilt für alle innerhalb des eigenen Internetangebotes gesetzten Links und Verweise sowie für Fremdeinträge in vom Autor eingerichteten Gästebüchern, Diskussionsforen und Mailinglisten. Für illegale, fehlerhafte oder unvollständige Inhalte und insbesondere für Schäden, die aus der Nutzung oder Nichtnutzung solcherart dargebotener Informationen entstehen, haftet allein der Anbieter der Seite, auf welche verwiesen wurde, nicht derjenige, der über Links auf die jeweilige Veröffentlichung lediglich verweist."
        />
      </div>
    </section>
  );
};

export default ImpressumSection;
