import AnimatedCounter from './AnimatedCounter';

const TotalBalanceBox = ({
    accounts = [], TotalBanks, TotalCurrentBalance
}: TotalBalanceBoxProps) => {
  return (
    <section className='total-balance'>
        <div className='total-balance-chart'>   
            {/* <DoughnutChart */}
        </div>

        <div className='flex flex-col gap-6'>   
            <h2 className='header-2'>    
                Bank Accounts: {TotalBanks} 
            </h2>
            <div className='flex flex-col gap-2'>
                <p className='total-balance-label'> 
                    TotalCurrentBalance
                </p>
                    
                <p className='total-balance-amount flex center gap-2'>
                    <AnimatedCounter amount=
                    {TotalCurrentBalance}/>
                </p> 
            </div>
        </div>
    </section>
  )
}
interface TotalBalanceBoxProps {
    accounts?: any[];
    TotalBanks: number;
    TotalCurrentBalance: number;
}

export default TotalBalanceBox