import { useExplorerStore } from '../../store/useExplorerStore'

export default function Greeting() {
  const explorerName = useExplorerStore((state) => state.explorerName)
  return <h1>שלום, {explorerName}</h1>
}
