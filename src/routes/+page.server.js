import * as runner from '$lib/server/dnsresults.js';
import { loading } from '../stores';

export async function load({ params }) {
    loading.set(false);
    return {
        data: await runner.getMonitors()
    }
}