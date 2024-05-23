@echo off
setlocal


choco -v >nul 2>&1
if %errorlevel%==0 (
    echo Chocolatey est déjà installé.
) else (
    echo Chocolatey n'est pas installé.
    echo Installation de Chocolatey...
    @powershell -NoProfile -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))"
    if %errorlevel%==0 (
        echo Chocolatey a été installé avec succès.
    ) else (
        echo L'installation de Chocolatey a échoué.
        exit /b 1
    )
)


where node >nul 2>&1
if %errorlevel%==0 (
    echo Node.js est déjà installé.
    node -v
) else (
    echo Node.js n'est pas installé.
    echo Installation de Node.js via Chocolatey...
    choco install nodejs-lts -y
    if %errorlevel%==0 (
        echo Node.js a été installé avec succès.
        node -v
    ) else (
        echo L'installation de Node.js a échoué.
    )
)


where clang >nul 2>&1
if %errorlevel%==0 (
    echo Clang est déjà installé.
    clang --version
) else (
    echo Clang n'est pas installé.
    echo Installation de Clang via Chocolatey...
    choco install llvm -y
    if %errorlevel%==0 (
        echo Clang a été installé avec succès.
        clang --version
    ) else (
        echo L'installation de Clang a échoué.
    )
)


where gcc >nul 2>&1
if %errorlevel%==0 (
    echo GCC est déjà installé.
    gcc --version
) else (
    echo GCC n'est pas installé.
    echo Installation de GCC via Chocolatey...
    choco install mingw -y
    if %errorlevel%==0 (
        echo GCC a été installé avec succès.
        gcc --version
    ) else (
        echo L'installation de GCC a échoué.
    )
)

endlocal
