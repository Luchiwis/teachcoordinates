import { Grid } from '/src/components/Grid'
import { SidePanel } from '../components/SidePanel'
import { ContextProvider } from '../components/ContextProvider'

export function Main() {
    return (
        <>
            <ContextProvider>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8">
                            <Grid></Grid>
                        </div>
                        <div className="col">
                            <SidePanel></SidePanel>
                        </div>
                    </div>
                </div>
            </ContextProvider>
        </>
    )
}