from fastapi import HTTPException
from data.atbash_maps import ENGLISH_MAP, HEBREW_MAP


def atbash(text: str) -> str:
    result = ''
    for char in text:
        if char == ' ':
            result += char
            continue
        if char in ENGLISH_MAP:
            result += ENGLISH_MAP[char]
        elif char in HEBREW_MAP:
            result += HEBREW_MAP[char]
        else:
            raise HTTPException(400, {'error': 'invalid character in text'})
    return result
