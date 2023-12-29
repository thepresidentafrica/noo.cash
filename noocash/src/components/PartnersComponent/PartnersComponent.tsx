export const PartnersComponent: React.FC<{ partners: string[], styles: string }> = ({ partners,styles }) => {
    return (<>
        <div className="grid grid-cols-4 gap-4">
            {
                (partners[0] === "all" ? ['pep.svg', 'ackermans.png', 'shoprite.png', 'checkers.png', 'takealot.png', 'amazon.png', 'mrp.png', 'woolworth.png'] : partners).map((item, index) => <img className={styles} key={index} src={`/patners/${item}`} alt={item} />)
            }
        </div>
    </>)

}
