const logger = {
    // eslint-disable-next-line no-console
    log: (...message: any[]) => console.log('\x1b[36m ', ...message, '\x1b[0m'),

    success: (...message: any[]) =>
        // eslint-disable-next-line no-console
        console.log('\x1b[32m SUCCESS ===> ', ...message, '\x1b[0m'),

    warn: (...message: any[]) =>
        // eslint-disable-next-line no-console
        console.log('\x1b[33m WARNING ===> ', ...message, '\x1b[0m'),

    error: (error: any, reason: string) =>
        // eslint-disable-next-line no-console
        console.error(
            '\x1b[31m ERROR =======> ',
            error,
            `/n REASON: ${reason} \x1b[om`
        ),
};

export default logger;
