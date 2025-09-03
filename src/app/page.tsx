import Process from '@/components/process';
import Pricing from '@/components/pricing';
import Payouts from '@/components/payouts';
import AppGrid from '@/components/app-grid';

export default function Home() {
  return (
    <main>
      <Process />
      <Pricing />
      <Payouts />
      <AppGrid />
    </main>
  )
}
