import { Request, Response, Next } from 'restify'
import { spawn } from 'child_process'
import { v4 as uuidv4 } from 'uuid'
import * as path from 'path'

const PUBLIC_FOLDER = path.join(__dirname, 'public')

export const webmToMp4 = (req: Request, res: Response, next: Next) => {
    if (!req.files || !req.files.file)
        return res.send(400, 'No se proporcionó un archivo WebM')

    const webmFile = req.files.file
    const inputFilePath = webmFile.path
    const outputFilePath = `${inputFilePath}.mp4`
    console.log(outputFilePath)

    const ffmpeg = spawn('ffmpeg', ['-i', inputFilePath, outputFilePath])

    ffmpeg.stdout.on('data', data => {
        console.log(`stdout: ${data}`)
    })
    ffmpeg.stderr.on('data', data => {
        console.error(`stderr: ${data}`)
    })
    ffmpeg.on('close', code => {
        if (code === 0) {
            res.send({ file: outputFilePath })
        } else {
            res.send(500, 'Error al convertir el archivo WebM a MP4')
        }
    })
}

export const mp4ToWebm = (req: Request, res: Response, next: Next) => {
    if (!req.files || !req.files.file)
        return res.send(400, 'No se proporcionó un archivo MP4')

    const mp4File = req.files.file
    const inputFilePath = mp4File.path
    const outputFilePath = `${inputFilePath}.webm`
    const ffmpeg = spawn('ffmpeg', ['-i', inputFilePath, outputFilePath])

    ffmpeg.stdout.on('data', data => {
        console.log(`stdout: ${data}`)
    })
    ffmpeg.stderr.on('data', data => {
        console.error(`stderr: ${data}`)
    })
    ffmpeg.on('close', code => {
        if (code === 0) {
            res.send({ file: outputFilePath })
        } else {
            res.send(500, 'Error al convertir el archivo MP4 a WebM')
        }
    })
}

export const removeAudio = (req: Request, res: Response, next: Next) => {
    if (!req.files || !req.files.file)
        return res.send(400, 'No se proporcionó un archivo de video')

    const videoFile = req.files.file
    const inputFilePath = videoFile.path
    const outputFilePath = `${inputFilePath}_noaudio.mp4`
    const ffmpeg = spawn('ffmpeg', [
        '-i',
        inputFilePath,
        '-c',
        'copy',
        '-an',
        outputFilePath
    ])

    ffmpeg.stdout.on('data', data => {
        console.log(`stdout: ${data}`)
    })
    ffmpeg.stderr.on('data', data => {
        console.error(`stderr: ${data}`)
    })
    ffmpeg.on('close', code => {
        if (code === 0) {
            res.send({ file: outputFilePath })
        } else {
            res.send(500, 'Error al eliminar el audio del archivo de video')
        }
    })
}
