import type { LayoutLoad } from './$types'

async function isHostAlive(url: string): Promise<boolean> {
	try {
		const response = await fetch(url, {
			method: 'HEAD', // Just check headers, don't download content
			signal: AbortSignal.timeout(500), // 0.5 second timeout
		})
		return response.ok
	} catch {
		return false
	}
}


export const load: LayoutLoad = async () => {
	return {
		/** Is the current client loading this page from the local Intranet (not the wider Internet)? */
		clientIsIntranet: await isHostAlive('http://links.thinter.net')
		// clientIsIntranet: true
	}
}