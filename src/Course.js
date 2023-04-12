import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

function Course({ id, content, title, price, removeOneCourse }) {
    const footer = (
        <div className="flex flex-wrap justify-content-end gap-2">
            <Button label="Sil" icon="pi pi-check" severity="danger" onClick={() => removeOneCourse(id)} />
        </div>
    );
    return <div className='kart'>
        <div className="card flex justify-content-center">
            <Card title={title} footer={footer} className="md:w-25rem">
                <p className="m-0">
                    <p className="prices">{price} TL</p><br />
                    {content}
                </p>
            </Card>
        </div>
    </div>
}
export default Course