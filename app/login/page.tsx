import { PageParam } from '@interface/constraint.interface';
import { Form } from './_components/form';

export default async function Page({ params, searchParams }: PageParam) {
    return (
        <div className="w-full max-w-sm mx-auto p-4 shadow-sm ">
            <h1 className=" font-bold text-center text-3xl mb-5  ">
                Login page
            </h1>
            <Form params={params} searchParams={searchParams} />
        </div>
    );
}
