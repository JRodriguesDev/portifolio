import type { Certificates } from '@/types/certificates';

export const certificates: Certificates[] = [
   {
      title: 'Google IT Support Professional Certificate',

      issuer: 'Google',

      description:
         'Certificação focada em suporte técnico, sistemas operacionais, redes, segurança, troubleshooting e administração de infraestrutura de TI.',

      category: 'TI Support',

      pdf: '/certificates/Google IT.pdf',

      skills: [
         'Linux',
         'TCP/IP',
         'Networking',
         'System Administration',
         'IT Security',
         'Troubleshooting',
         'Desktop Support',
         'Version Control',
      ],

      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
   },
   {
      title: 'Network Support and Security',

      issuer: 'Cisco',

      description:
         'Certificação voltada para suporte a usuários, troubleshooting de redes, dispositivos finais e fundamentos de segurança em ambientes corporativos.',

      category: 'Networking',

      pdf: '/certificates/Network_Support_and_Security_certificate.pdf',

      skills: [
         'Network Troubleshooting',
         'Help Desk',
         'User Support',
         'Network Security',
         'Endpoint Support',
         'Documentation',
      ],

      color: 'text-sky-400',
      bgColor: 'bg-sky-500/10',
   },
   {
      title: 'Network Addressing and Basic Troubleshooting',

      issuer: 'Cisco',

      description:
         'Certificação focada em endereçamento IP, fundamentos das camadas de rede, roteamento, switching e diagnóstico de problemas em ambientes corporativos.',

      category: 'Networking',

      pdf: '/certificates/Network_Addressing_and_Basic_Troubleshooting_certificate.pdf',

      skills: [
         'IPv4/IPv6',
         'Network Troubleshooting',
         'Cisco Routers',
         'Cisco Switches',
         'Network Layers',
         'Fiber & Copper Cabling',
      ],

      color: 'text-sky-400',
      bgColor: 'bg-sky-500/10',
   },
   {
      title: 'Networking Basics',

      issuer: 'Cisco',

      description:
         'Certificação introdutória sobre fundamentos de redes de computadores, protocolos, dispositivos de rede, conectividade sem fio e comunicação de dados.',

      category: 'Networking',

      pdf: '/certificates/networking_basics_certificate.pdf',

      skills: [
         'IPv4',
         'Network Protocols',
         'Wireless Networks',
         'Network Devices',
         'Network Media',
         'Application Services',
      ],

      color: 'text-sky-400',
      bgColor: 'bg-sky-500/10',
   },
   {
      title: 'Network Devices and Initial Configuration',

      issuer: 'Cisco',

      description:
         'Certificação focada na configuração inicial de dispositivos Cisco, endereçamento IP, subnetting, protocolos de rede, virtualização e fundamentos de infraestrutura corporativa.',

      category: 'Networking',

      pdf: '/certificates/Networking_Devices_and_Initial_Configuration_certificate.pdf',

      skills: ['Cisco IOS', 'IPv4 Subnetting', 'DHCP', 'DNS', 'ARP', 'Network Design'],

      color: 'text-sky-400',
      bgColor: 'bg-sky-500/10',
   },
];
