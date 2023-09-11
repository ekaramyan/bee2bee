

export default function Footer({ onContactsClick, onRulesClick, onMainPageClick }) {
  return (
    <footer>
    <button onClick={onMainPageClick}>Main Page</button>
    <button onClick={onContactsClick}>Contacts</button>
    <button onClick={onRulesClick}>Rules</button>
  </footer>
  )
}
