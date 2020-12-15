from mininet.topo import Topo

class MyTopo( Topo ):
    "Simple topology example."

    def __init__( self ):
        "Create custom topo."

        # Initialize topology
        Topo.__init__( self )

        # Add hosts and switches
        host1= self.addHost('h1')
        host2 = self.addHost('h2')
        host3 = self.addHost('h3')
        host4 = self.addHost('h4')
        host5 = self.addHost('h5')
        switch1 = self.addSwitch('s1')
        switch2 = self.addSwitch('s2')
        switch3 = self.addSwitch('s3')
        switch4 = self.addSwitch('s4')
        switch5 = self.addSwitch('s5')
        switch6 = self.addSwitch('s6')

        # Add links
        self.addLink(host1,switch1)
        self.addLink(switch1,host2)
        self.addLink(switch1,switch4)
        self.addLink(switch4,switch2)
        self.addLink(switch2,host3)
        self.addLink(switch2,host4)
        self.addLink(switch4,switch6)
        self.addLink(switch6,switch5)
        self.addLink(switch5,switch3)
        self.addLink(switch3,host5)


topos = { 'mytopo': ( lambda: MyTopo() ) }
