import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from './ui/button';

export type Plan = {
    name: string
    blurb: string
    price: string
    spread: string
    fees: string
    leverage: string
    minLot: string
    execLimit: string
    openPos: string
    stopOut: string
    marginCall: string
    swap: string
    risk: string
    assets: string
}

export default function PlanningCardLayout({plan}: { plan: Plan }) {
    return (
        <Card className="flex flex-col">
            <CardHeader>
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <CardDescription>{plan.blurb}</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-3 text-sm">
                <div className="text-muted-foreground">Initial Capital Requirement</div>
                <div className="font-medium">{plan.price}</div>
                <div className="text-muted-foreground">Spread Advantage</div>
                <div className="font-medium">{plan.spread}</div>
                <div className="text-muted-foreground">Trading Fees</div>
                <div className="font-medium">{plan.fees}</div>
                <div className="text-muted-foreground">Leverage Capacity</div>
                <div className="font-medium">{plan.leverage}</div>
                <div className="text-muted-foreground">Minimum Lot Size</div>
                <div className="font-medium">{plan.minLot}</div>
                <div className="text-muted-foreground">Trade Execution Limit</div>
                <div className="font-medium">{plan.execLimit}</div>
                <div className="text-muted-foreground">Open Position Capacity</div>
                <div className="font-medium">{plan.openPos}</div>
                <div className="text-muted-foreground">Stop Out Threshold</div>
                <div className="font-medium">{plan.stopOut}</div>
                <div className="text-muted-foreground">Margin Call Activation</div>
                <div className="font-medium">{plan.marginCall}</div>
                <div className="text-muted-foreground">Swap Policy</div>
                <div className="font-medium">{plan.swap}</div>
                <div className="text-muted-foreground">Risk Exposure</div>
                <div className="font-medium">{plan.risk}</div>
                <div className="text-muted-foreground">Asset Options</div>
                <div className="font-medium">{plan.assets}</div>
            </CardContent>
            <CardFooter>
                <Button className="w-full">Start Trading</Button>
            </CardFooter>
        </Card>
    )
}